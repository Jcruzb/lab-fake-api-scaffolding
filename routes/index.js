const routes = require('express').Router();
const pokemonControllers = require('../controllers/pokemon.Controllers');

routes.get('/', (req, res, next) => {
    res.render('index');
    }
);

routes.get('/pokemon', pokemonControllers.list);



module.exports = routes;