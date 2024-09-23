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

    const qtd = await colecao.countDocuments({});
    let index = 1;

    for (let i = 1; i <= qtd + 1; i++) {
      const editalExistente = await colecao.findOne({ id: i });
      if (!editalExistente) {
        index = i;
        break;
      }
    }
    edital.id = index;
    edital.dataCriacao = new Date();
    edital.dataModificacao = new Date();
    edital.status = "Iniciado";
    await colecao.insertOne(edital);
  }

  async consulta(id) {
    await conexao_bd()
    const colecao = bd().collection("editais")
    const edital = await colecao.findOne({ id: id })
    return edital
  }

  async altera(id, edital) {
    await conexao_bd();
    const colecao = bd().collection("editais");
    await colecao.updateOne(
      { id: id },
      {
        $set: {
          titulo: edital.titulo,
          tipo: edital.tipo,
          link: edital.link,
          coordenador: edital.coordenador,
          descricao: edital.descricao,
        },
      }
    );
  }

  async deleta(id) {
    await conexao_bd();
    const colecao = bd().collection("editais");
    const edital = await colecao.findOne({ id: id });
    if (!edital) {
      throw new Error(`Não existe edital com id: ${id}`);
    } else {
      await colecao.findOneAndDelete({ id: id });
    }
  }

  async lista() {
    await conexao_bd();
    const colecao = bd().collection("editais");
    const editais = await colecao.find({}).sort({ dataCriacao: -1 }).toArray();
    return editais;
  }

  async listaTipo(tipo) {
    await conexao_bd();
    const colecao = bd().collection("editais");
    const editais = await colecao.find({ tipo: tipo }).sort({ dataCriacao: -1 }).toArray();
    return editais;
  }

}
module.exports = new editalMongo();