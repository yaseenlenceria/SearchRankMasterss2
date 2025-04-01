#!/usr/bin/env node
// Script to modify package.json for Netlify build

const fs = require('fs');
const path = require('path');

// Read the package.json file
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add resolutions field to handle problematic dependencies
packageJson.resolutions = {
  ...packageJson.resolutions,
  'camelcase-css': '2.0.1'
};

// Write the modified package.json back
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log('Modified package.json for Netlify compatibility');