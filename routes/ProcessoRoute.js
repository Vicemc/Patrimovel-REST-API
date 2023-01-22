const express = require("express");
const {
  addProcesso,
  getProcessosAbertos,
} = require("../controller/processoController");

const router = express.Router();

router.post("/novoProcesso", addProcesso);
router.get("/listaProcessosAbertos",getProcessosAbertos)

module.exports = {
  routes: router,
};
