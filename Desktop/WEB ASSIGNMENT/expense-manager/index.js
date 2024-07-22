const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 1000;

app.use(bodyParser.json());

// Basic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
