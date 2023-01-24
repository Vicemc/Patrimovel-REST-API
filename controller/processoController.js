const mongoose = require("mongoose");
const Processo = require("../models/Processo");

const addProcesso = async (req, res, next) => {
    /**
     * @swagger
     * /novoProcesso:
     *  post:
     *    description: Adiciona um novo processo
     *    requestBody:
     *      required: true
     *      content:
     *        application/json:
     *          schema:
     *            $ref: 'components/schemas/Processo'
     *    responses:
     *      200:
     *        description: Processo adicionado com sucesso
     *      400:
     *        description: Erro na validação dos dados
     *      *  components:
     *    schemas:
     *      Processo:
     *        type: object
     *        required:
     *          - dataAbertura
     *        properties:
     *          idLocal:
     *            type: string
     *          dataAbertura:
     *            type: date
     *            format: date-time
     *          statusVerificacao:
     *            type: array
     *            items:
     *              type: object
     *              properties:
     *                numCorretos:
     *                  type: number
     *                numRestantes:
     *                  type: number
     *                numObservacoes:
     *                  type: number
     *                numIncorretos:
     *                  type: number
     *          patrimonios:
     *            type: array
     *            items:
     *              type: object
     *              properties:
     *                statusPatrimonio:
     *                  type: number
     *                descricao:
     *                  type: string
     *              observacao:
     *                  type: string
     */

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
    /**
     * @swagger
     * /listaProcessosAbertos:
     *  get:
     *    description: Retorna uma lista de processos abertos
     *    responses:
     *      200:
     *        description: Uma lista de processos abertos
     */
  const processos = await Processo.find()
  var filtrado = processos.filter(function(obj) { return obj.patrimonios[0].statusPatrimonio == 1; });
  res.json(filtrado)

}


module.exports = {
    addProcesso,
    getProcessosAbertos
};
