// Listen for the button click event
document.getElementById('verify-button').addEventListener('click', function() {
    // Trigger the Google authentication flow using hello('google').login
    hello('google').login({ scope: 'email', redirect_uri: 'studynchill-verification.vercel.app' }).then(function(authResponse) {
        // Handle the authentication response
        handleAuthenticationResponse(authResponse);
    }).catch(function(error) {
        // Handle authentication errors
        console.error('Authentication failed', error);
    });
});


// Function to handle the authentication response
function handleAuthenticationResponse(authResponse) {
    if (authResponse && authResponse.authResponse) {
        // The user is authenticated

        // Access the user's email (or other data) from the authentication response
        var email = authResponse.authResponse.email;

        // Check the user's email for validation, e.g., verifying the domain
        if (email && email.endsWith('@ds.study.iitm.ac.in')) {
            // Email is valid

            // You can proceed to perform actions like assigning a "verify" role in Discord
            // Add your logic here

            // Example: Display a success message
            console.log('Authentication successful');
        } else {
            // Email is not valid
            console.log('Invalid email address');
        }
    } else {
        // Authentication failed or was canceled
        console.log('Authentication failed or was canceled');
    }
}
