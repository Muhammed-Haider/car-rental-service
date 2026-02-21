// Email service for sending form submissions

export async function sendFormEmail(formData, formType = 'Contact Form') {
  try {
    // Send to API route
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formData: formData,
        formType: formType
      })
    });

    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.message || 'Failed to send email');
    }

    console.log(`✅ ${formType} submitted successfully!`);
    return { success: true, message: result.message };
    
  } catch (error) {
    console.error('❌ Error processing form submission:', error);
    return { success: false, message: error.message || 'Failed to process form submission' };
  }
}

// React hook for form submissions
export function useFormSubmission() {
  const submitForm = async (formData, formType = 'Contact Form') => {
    const result = await sendFormEmail(formData, formType);
    
    if (result.success) {
      console.log(`✅ ${formType} submitted successfully!`);
    } else {
      console.error(`❌ ${formType} submission failed:`, result.message);
    }
    
    return result;
  };

  return { submitForm };
}
