const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, images) from the "public" folder
app.use(express.static('public'));

// Main Route
app.get('/', (req, res) => {
    const data = {
        title: "Welcome Page",
        message: "Hello from the Express Frontend!"
    };
    res.render('index', data); // Renders views/index.ejs
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
