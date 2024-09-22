const mongodb = require("mongodb");

var cliente;
const ClienteMongo = mongodb.MongoClient;

const conexao_bd = async () => {
  if (!cliente)
    cliente = await ClienteMongo.connect("mongodb://127.0.0.1:27017");
};

function bd() {
  return cliente.db("editaisCompilados");
};

class editalMongo {
  async close() {
    if (cliente) cliente.close();
    cliente = undefined;
  }

  async cria(edital) {
    await conexao_bd();
    const colecao = bd().collection("editais");
    edital.dataCriacao = new Date();
    edital.dataModificacao = new Date();
    edital.status = "Iniciado";
    await colecao.insertOne(edital);
  }
  
}
module.exports = new editalMongo();