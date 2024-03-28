document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const formData = new FormData(this);
    const formDataObject = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    console.log(formDataObject);
  });
  