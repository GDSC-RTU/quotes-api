const express = require('express')
const app = express()
const quotes = require('./quotes/quotes.json')
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(quotes)
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