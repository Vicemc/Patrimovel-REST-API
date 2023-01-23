const mongoose = require("mongoose");
const Processo = require("../models/Processo");
const swaggerAutogen = require("swagger-autogen");


const addProcesso = async (req, res, next) => {

  try {
    const body = req.body
    const processo = new Processo({
		    idLocal:body.idLocal,
            statusVerificacao:body.statusVerificacao,
            patrimonios:body.patrimonios,
            descricao:body.descricacao,
  
	})
	await processo.save()
	res.json(processo)
  /* #swagger.parameters["Processo"] = {
        in: "body",
        schema: {
          $idprocess: "234,
          $idLocal: "Teste",
          $dataabertura: "2022-05-01T00:00:00.000Z",
          $statusverificacao: {
            $numcorretos: 10,
            $numrestantes: 5,
            $numobservacao: 3,
            $numincorretos: 2
          },
          $patrimonios: [{
            $statusPatrimonio: 0,
            $descricao: "Placa Mãe Asus"
          }]
          
        }

} */
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getProcessosAbertos = async (req , res, next)=>{

  const processos = await Processo.find()
  var filtrado = processos.filter(function(obj) { return obj.patrimonios[0].statusPatrimonio == 1; });
  res.json(filtrado)

}


module.exports = {
    addProcesso,
    getProcessosAbertos
};