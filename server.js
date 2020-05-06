const express = require('express');
const app = express();
// const port = 3000;
const path = 'index.html';

app.use(express.static('public'))

// configure it to handle a route; app + http method = a route
app.get('/', (req, res) => {
    res.send('hello world')
}),

app.listen(3000, () => {
	console.log('listening on 3000');
});