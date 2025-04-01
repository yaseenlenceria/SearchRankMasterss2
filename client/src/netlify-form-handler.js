// This file will help handle form submissions in the static Netlify environment

/**
 * Handles form submissions on Netlify
 * @param {Event} event - The form submission event
 * @param {string} formName - The name of the form for Netlify
 * @param {Object} data - The form data to submit
 * @param {Function} onSuccess - Callback for successful submission
 * @param {Function} onError - Callback for failed submission
 */
export const handleNetlifyFormSubmit = async (event, formName, data, onSuccess, onError) => {
  event.preventDefault();

  // For Netlify forms, we submit using fetch to the Netlify form endpoint
  try {
    // Create a URLSearchParams object to construct the form data
    const formData = new URLSearchParams();
    
    // Add the form name for Netlify
    formData.append('form-name', formName);
    
    // Add all the form fields to the form data
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    // Submit the form data to Netlify's form handler
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    });

    if (response.ok) {
      onSuccess && onSuccess();
    } else {
      onError && onError(new Error('Form submission failed'));
    }
  } catch (error) {
    onError && onError(error);
  }
};