document.getElementById('form').addEventListener('submit', function(event) {
    
    // Retrieve form data
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm_password').value;
  
    // Perform necessary checks
    var errorMessage = '';
    var errorMessageElement = document.querySelector('.error-message');
    if (password != confirmPassword) {

        event.preventDefault();
        errorMessage = '*Passwords do not match.';

        errorMessageElement.textContent = errorMessage;
        errorMessageElement.style.display = 'block';
  
        document.getElementById('password').classList.add('error-input');
        document.getElementById('confirm_password').classList.add('error-input');

        return;
    }else{
        // Clear error message and proceed with further actions
        errorMessageElement.textContent = '';
        errorMessageElement.style.display = 'none';
    }
    
  });

  
// Add event listeners to remove the red border on input click
document.getElementById('password').addEventListener('click', function() {
    this.classList.remove('error-input');
    document.querySelector('.error-message').textContent = '';
});
  
document.getElementById('confirm_password').addEventListener('click', function() {
    this.classList.remove('error-input');
});

