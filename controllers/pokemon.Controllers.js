
const pokemonApi = require("../services/base.service")

//PokeApi

console.log(pokemonApi.data)
module.exports.list = (req, res, next) => {
    pokemonApi.get()
        .then((response) => {
            //res.send({ pokemon: response.data.results });
            res.render('pokemon/pokemon-list', { pokemon: response.data.results });
        })
        .catch((error) => {
            next(error);
        });
}