const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../swagger")

const {
  addProcesso,
  getProcessosAbertos,
} = require("../controller/processoController");
const swaggerJSDoc = require("swagger-jsdoc");

const router = express.Router();

/**
 * @swagger
 * /novoProcesso:
 *   post:
 *     description: Adiciona um novo processo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NovoProcesso'
 *     responses:
 *       201:
 *         description: Processo adicionado com sucesso
 *       400:
 *         description: Erro na validação dos dados
 */
router.post("/novoProcesso", addProcesso);

/**
 * @swagger
 * /listaProcessosAbertos:
 *   get:
 *     description: Retorna uma lista de processos abertos
 *     responses:
 *       200:
 *         description: Uma lista de processos abertos
 */
router.get("/listaProcessosAbertos",getProcessosAbertos)

module.exports = {
  routes: router,
};
