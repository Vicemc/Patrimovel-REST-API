const mongoose = require("mongoose");
const Processo = require("../models/Processo");


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