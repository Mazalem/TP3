const edital = require("../model/editalMongo.js");

exports.cria_get = async function (req, res) {
    res.render('criaEdital', { title: "Criação de Edital" });
};

exports.cria_post = async function (req, res) {
    var editais = req.body;
    await edital.cria(editais);
    res.redirect('/');
}

exports.altera_get = async function (req, res) {
    var id = parseInt(req.params.id, 10);
    var editais = await edital.consulta(id);

    var b_ensino = false;
    var b_pesquisa = false;
    var b_extensao = false;

    switch(editais.tipo) {
        case "Ensino":
            b_ensino = true;
            break;
        case "Pesquisa":
            b_pesquisa = true;
            break;
        case "Extensão":
            b_extensao = true;
            break;
    }

    var b_elder = false;
    var b_loham = false;
    var b_filipe = false;
    var b_mylena = false;
    var b_karine = false;

    switch(editais.coordenador) {
        case "Elder":
            b_elder = true;
            break;
        case "Loham":
            b_loham = true;
            break;
        case "Filipe":
            b_filipe = true;
            break;
        case "Mylena":
            b_mylena = true;
            break;
        case "Karine":
            b_karine = true;
            break;
    }

    res.render("alteraEdital", { title: "Alterar Edital", editais: editais, b_ensino: b_ensino, b_pesquisa: b_pesquisa, b_extensao: b_extensao, b_elder:b_elder, b_loham: b_loham, b_filipe: b_filipe, b_mylena: b_mylena, b_karine:b_karine});
}

exports.altera_post = async function (req, res) {
    var id = parseInt(req.params.id, 10);
    console.log(id)
    var editais = req.body;

    await edital.altera(id, editais);
    res.redirect('/');
}

exports.deleta = async function (req, res) {
    var id = parseInt(req.params.id, 10);
    await edital.deleta(id);

    res.redirect('/');
}