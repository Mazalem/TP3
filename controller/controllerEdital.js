const editais = require("../model/editalMongo.js");

exports.cria_get = async function (req, res) {
    res.render('criaEdital', { title: "Criação de Edital" });
};

exports.cria_post = async function (req, res) {
    var edital = req.body;
    await editais.cria(edital);
    res.redirect('/');
}