const express = require("express")
const mongoose = require("mongoose")
const ProcessoRoute = require("./routes/ProcessoRoute")
const swaggerSpec = require('./swagger')
const swaggerUi = require('swagger-ui-express')

mongoose
	.connect("mongodb+srv://victormclimaco:sSls9M3Ed0kKBCys@restapi.m2oa6bx.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(express.json()) 
		app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
		app.use("/api/v1", ProcessoRoute.routes)
		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})
