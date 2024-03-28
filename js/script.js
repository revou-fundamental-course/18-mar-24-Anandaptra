document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // You can handle form submission here, e.g., send data to server or display a confirmation message
    // For demonstration, let's just log the form data
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);
  });
  