const express = require('express')
const app = express()
const quotes = require('./quotes/quotes.json')
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(quotes)
})

//sends a random everytime a request is sent to this endpoint
app.get('/random', (req, res) => {
    let size = quotes.length;
    let id = Math.floor(Math.random() * size);
    res.send(quotes[id]);
})

//sending a quote with a specific id
app.get('/:id', (req, res) => {
    let temp;
    temp = quotes.filter((quote) => quote.id == req.params.id)
    res.send(temp)
})

app.listen(port, () => {
    console.log(`Listening on the port ${port}`);
})