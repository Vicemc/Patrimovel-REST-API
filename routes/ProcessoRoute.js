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
 * /api/v1/novoProcesso:
 *   post:
 *     description: Adiciona um novo processo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Processo'
 *     responses:
 *       200:
 *         description: Processo adicionado com sucesso
 *       400:
 *         description: Erro na validação dos dados
 *     components:
 *       schemas:
 *         Processo:
 *           type: object
 *           required:
 *             - dataAbertura
 *           properties:
 *             idLocal:
 *               type: string
 *             dataAbertura:
 *               type: date
 *               format: date-time
 *             statusVerificacao:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   numCorretos:
 *                     type: number
 *                   numRestantes:
 *                     type: number
 *                   numObservacoes:
 *                     type: number
 *                   numIncorretos:
 *                     type: number
 *             patrimonios:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   statusPatrimonio:
 *                     type: number
 *                   descricao:
 *                     type: string
 *                 observacao:
 *                   type: string
 */


router.post("/novoProcesso", addProcesso);

/**
 * @swagger
 * /api/v1/listaProcessosAbertos:
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
