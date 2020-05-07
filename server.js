const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = 'index.html';

app.use(express.static('public'))

// configure it to handle a route; app + http method = a route
app.get('/', (req, res) => {
    res.send('hello world')
}),

app.listen(port, () => {
	console.log('listening on ' + port);
});