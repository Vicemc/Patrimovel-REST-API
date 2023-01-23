const mongoose = require("mongoose")

const schema = mongoose.Schema({
    /**
     * @swagger
     *  components:
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
	idLocal: String,
	dataAbertura : { type: Date, required: true, default: Date.now },
    statusVerificacao:[{
        numCorretos:Number,
        numRestantes:Number,
        numObservacoes:Number,
        numIncorretos:Number
    }],
    patrimonios:[{
        statusPatrimonio:Number,
        descricao:String,
    },
    {   observacao: String
        }],
})

module.exports = mongoose.model("Processo", schema)
