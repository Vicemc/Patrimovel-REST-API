const mongoose = require("mongoose")

const schema = mongoose.Schema({
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
    }],
})

module.exports = mongoose.model("Processo", schema)