#!/bin/bash
# Custom Netlify build script to work around dependency issues

# Apply package.json patch
echo "Patching package.json for Netlify compatibility..."
node ./patch-package.json.js

# Clean npm cache
echo "Clearing npm cache..."
npm cache clean --force

# Try to install dependencies with npm ci first
echo "Installing dependencies with npm ci..."
npm ci || {
  # If npm ci fails, try regular npm install
  echo "npm ci failed, trying npm install..."
  npm install
}

# If we still have issues, download the problematic package directly
if [ $? -ne 0 ]; then
  echo "Dependency installation failed, attempting manual fix for camelcase-css..."
  mkdir -p node_modules/camelcase-css
  curl -s https://unpkg.com/camelcase-css@2.0.1/index.js > node_modules/camelcase-css/index.js
  curl -s https://unpkg.com/camelcase-css@2.0.1/package.json > node_modules/camelcase-css/package.json
  
  # Continue with regular install
  echo "Retrying npm install after manual fix..."
  npm install
fi

# Run the build command
echo "Running build command..."
npm run build