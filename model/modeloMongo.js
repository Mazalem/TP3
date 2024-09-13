const mongodb = require("mongodb");

var cliente;
const ClienteMongo = mongodb.MongoClient;

const conexao_bd = async () => {
  if (!cliente)
    cliente = await ClienteMongo.connect("mongodb://127.0.0.1:27017");
};

function bd() {
  return cliente.db("notas");
};

class modeloMongo {
  async close() {
    if (cliente) cliente.close();
    cliente = undefined;
  }
  
}
module.exports = new modeloMongo();