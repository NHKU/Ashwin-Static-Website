document.getElementById('phoneInput').addEventListener('input', function (e) {
    let input = e.target.value;

    // Remove any non-digit characters (just in case)
    input = input.replace(/\D/g, '');

    // Limit the input to 10 digits
    if (input.length > 10) {
        input = input.slice(0, 10);
    }

    // Set the value back to the input
    e.target.value = input;
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phoneInput').value.trim();
    const message = document.getElementById('message').value.trim();

    // Check if any field is empty
    if (!name| !lastName | !email | !phone | !message ) {
        alert('Please fill out all fields.');
        return; // Stop form submission
    }

    // If all fields are filled, you can submit the form or handle the data
    alert('Form submitted successfully!');
    // Uncomment the line below if you want to submit the form
    // this.submit(); 
});