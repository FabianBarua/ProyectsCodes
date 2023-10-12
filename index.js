const express = require('express');
const path = require('path');
const routes = require('./routes')
const bodyParser = require('body-parser');
const db = require('./config/db');
const helpers = require('./helpers');

require('./models/codeslanguages')
require('./models/codes')
require('./models/languages')




const port = 3000;

//force : true para forzar la db
db.sync({force:false})
    .then(()=>{console.log('its ok')})
    .catch((error => {console.log('oh no!')}))

const app = express();


app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
});

app.use(routes());
app.use(bodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));



const server = app.listen(port, () => {
    console.log(`The application started on port http://localhost:${server.address().port}`);
});