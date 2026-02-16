const express = require('express');
app = express();


// Your existing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));  // Required for form data
app.set('view engine', 'ejs');  // Set EJS as view engine
app.set('views', './views');   // Create 'views' folder

// Your existing users array and middlewares...
app.use(responseTimeMiddleware);
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Route to show contact form
app.get('/contact', (req, res) => {
  res.render('contact', { success: null, errors: null });
});

// Route to handle form submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  // Basic validation
  if (!name || !email || !message) {
    return res.render('contact', { 
      success: null, 
      errors: 'All fields are required' 
    });
  }

  // Process form (log, save to file/DB, send email, etc.)
  console.log('Contact form submitted:', { name, email, message });
  
  // Success response
  res.render('contact', { 
    success: 'Thank you! Your message has been sent.', 
    errors: null 
  });
});

app.listen(8080, () => {
  console.log(`Server running at http://localhost:${8080}`);
});
