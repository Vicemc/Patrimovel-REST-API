const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Patrimóvel API',
      version: '1.0.0',
      description: 'Trabalho de API REST'
    },
    components: {
        schemas: {
          Processo: {
            type: "object",
            required: ["dataAbertura"],
            properties: {
              idLocal: {
                type: "string"
              },
              dataAbertura: {
                type: "string",
                format: "date-time"
              },
              statusVerificacao: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    numCorretos: {
                      type: "number"
                    },
                    numRestantes: {
                      type: "number"
                    },
                    numObservacoes: {
                      type: "number"
                    },
                    numIncorretos: {
                      type: "number"
                    }
                  }
                }
              },
              patrimonios: {
                type: "array",
                items: {
                  type: "object",
                  properties: {
                    statusPatrimonio: {
                      type: "number"
                    },
                    descricao: {
                      type: "string"
                    },
                    observacao: {
                      type: "string"
                    }
                  }
                }
              }
            }
          }
        }
      },
    servers: [
      {
        url: 'http://localhost:5000'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const specs = swaggerJSDoc(options);

module.exports = specs;
