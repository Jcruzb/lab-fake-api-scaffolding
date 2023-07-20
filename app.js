const express = require('express');
const hbs = require('hbs');


const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static('public'));

const routes = require('./routes/index');
app.use('/', routes);

app.listen(3000, () => console.log('App listening on port 3000!'));

