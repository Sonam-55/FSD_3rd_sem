
const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
    fs.readFile('./pages/home.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading Home page');
        }
        res.send(data);
    });
});


app.get('/about', (req, res) => {
    fs.readFile('./pages/about.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading About page');
        }
        res.send(data);
    });
});


app.get('/contact', (req, res) => {
    fs.readFile('./pages/contact.html', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error loading Contact page');
        }
        res.send(data);
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
