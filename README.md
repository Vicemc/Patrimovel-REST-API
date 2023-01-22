# Patrimovel-REST-API

## Links importantes
    https://www.planttext.com
    https://reqbin.com
    https://cloud.mongodb.com/v2#/org/6399c2b670c1fb6044580891/

## Pendências
  Eu tenho que implementar um GET e um POST. São eles:

  |  Método | Rota (subURL) | Request | Response
| ------------- | ------------- | ------------- | ------------- |
| GET  | /listaprocessosabertos  | idlocal | Ver abaixo
| POST  | /novoprocesso  | /local | // patrimonios, data e id

Response GET:
```javascript
{[
    {
       idprocess, // id do processo
       idlocal, // id do local do patrimônio
       dataabertura, // data de abertura do processo
       statusverificacao : {
           numcorretos,
           numrestantes,
           numobservacao,
           numincorretos
         }
    }
],[] }
```

### POST
  - Criar, na pasta  Model, o processo
  - Status de verificação
  
