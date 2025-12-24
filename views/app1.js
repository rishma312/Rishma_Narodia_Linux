const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

// CRITICAL: This allows Express to parse form data
app.use(express.urlencoded({ extended: true }));

// GET route to show the form
app.get('/', (req, res) => {
    res.render('index', { user: null });
});

// POST route to handle form submission
app.post('/submit', (req, res) => {
    const username = req.body.username; // Matches the 'name' attribute in HTML
    const email = req.body.email;
    
    // Send the data back to the page to display a "Success" message
    res.render('index', { user: username });
});

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
