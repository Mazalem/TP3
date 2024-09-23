const edital = require("../model/editalMongo.js");

exports.listar = async function (req, res) {
    var todos = await edital.lista();
    var ensino = await edital.listaTipo("Ensino");
    var pesquisa = await edital.listaTipo("Pesquisa");
    var extensao = await edital.listaTipo("Extensão");
    
    res.render('index', {title: "Editais Compilados", todos: todos, ensino: ensino, pesquisa: pesquisa, extensao: extensao});
}

