require('dotenv').config();
const express = require('express')
const app = express();
// const port = 3000;

app.get('/', (req, res) => {
    res.send('hello world')
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Provacc running on ${process.env.PORT || 5000}`)
})