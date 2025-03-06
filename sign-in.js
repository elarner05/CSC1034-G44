

// Temporary sign in, to bypass not having a server
document.getElementById('signinForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    localStorage.setItem("UserName", username);
    localStorage.setItem("ConnectionToken", password); // The final system will probably implement some type of token based connection to the server, saving password for now
    localStorage.setItem("SignedIn", "true");



    window.location.href = 'index.html';
});

document.getElementById("createAccountButton").addEventListener("click", function() {
  window.location.href = "create-account.html"
});

/* This has been, in part, generated by chatgpt. Must be edited to use the requests as guided by andrew in the future


document.getElementById('signinForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Stop the form from submitting normally
  
    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      // Replace '/api/signin' with your actual sign-in endpoint
      const response = await fetch('/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      
      const data = await response.json();
  
      if (data.success) {
        // Sign in was successful.
        // You can now redirect the user or update the UI, e.g., store a token.
        window.location.href = 'main.html'; // Or update UI elements to show user details.
      } else {
        // Show an error message if credentials are invalid.
        document.getElementById('errorMessage').classList.remove('hidden');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      // Optionally show an error message here.
      document.getElementById('errorMessage').classList.remove('hidden');
    }
  });

  */