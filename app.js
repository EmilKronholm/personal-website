const express = require('express');
const path = require('path');
const cors = require("cors")

const app = express();
const PORT = 3000;

app.use(cors())

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Basic route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ui/index.html'));
});


//Morfars lilla experiment
const goiboet = require("./goiboet/goiboet-router")
app.use(goiboet);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});