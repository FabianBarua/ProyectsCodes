const express = require('express');
const path = require('path');
const routes = require('./routes')

const port = 3000;

const app = express();

app.use(routes());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));


const server = app.listen(port, () => {
    console.log(`The application started on port http://localhost:${server.address().port}`);
});