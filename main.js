const form = document.getElementById('loginForm');
    const errorDiv = document.getElementById('error');

    form.addEventListener('submit', function(event) {
      event.preventDefault();
      errorDiv.style.display = 'none';
      errorDiv.textContent = '';

      const email = form.email.value.trim();
      const password = form.password.value.trim();

      if (!email || !password) {
        errorDiv.textContent = 'Both email and password are required.';
        errorDiv.style.display = 'block';
        return;
      }

      // Simple email format validation
      const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if (!emailPattern.test(email)) {
        errorDiv.textContent = 'Please enter a valid email address.';
        errorDiv.style.display = 'block';
        return;
      }

      // Simulate login success for a specific user
      if (email === 'user@example.com' && password === 'password123') {
        alert('Login successful!');
        // Redirect or further logic here
      } else {
        errorDiv.textContent = 'Invalid email or password.';
        errorDiv.style.display = 'block';
      }
    });