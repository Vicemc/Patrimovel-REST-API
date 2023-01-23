const express = require("express")
const mongoose = require("mongoose")
const swaggerUi = require("swagger-ui-express")
const ProcessoRoute = require("./routes/ProcessoRoute")
const swaggerFile = require("./swagger-output.json")

mongoose
	.connect("mongodb+srv://victormclimaco:sSls9M3Ed0kKBCys@restapi.m2oa6bx.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()
		app.use(express.json()) // new
		app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))
		app.use("/api/v1", ProcessoRoute.routes)
		app.listen(5000, () => {
			console.log("Server has started!")
		})
	})
