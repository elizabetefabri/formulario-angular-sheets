const express = require('express');
const { getData, appendData } = require('../services/googleSheetsService');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const data = await getData();
    res.json(data);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.post('/', async (req, res) => {
  try {
    const {
      nomeCivil, nomeReceita, tituloEleitoral, cpf, rg, dataExpedicaoRg, orgaoExpedidorRg,
      estadoExpedicaoRg, documentoClasse, municipioNascimento, dataNascimento,
      nacionalidade, nomeMae, nomePai, deficiencia, qualDeficiencia, telefone1,
      appsDisponiveis, telefone2, appsDisponiveis2, estadoCivil, racaCor, genero,
      identidadeGenero, grauInstrucao, ocupacao, informarOutros, adminPublica
    } = req.body;

    const formattedAppsDisponiveis = Array.isArray(appsDisponiveis) ? appsDisponiveis.join(", ") : appsDisponiveis;
    const formattedAppsDisponiveis2 = Array.isArray(appsDisponiveis2) ? appsDisponiveis2.join(", ") : appsDisponiveis2;

    const values = [
      [
        nomeCivil, nomeReceita, tituloEleitoral, cpf, rg, dataExpedicaoRg, orgaoExpedidorRg,
        estadoExpedicaoRg, documentoClasse, municipioNascimento, dataNascimento,
        nacionalidade, nomeMae, nomePai, deficiencia, qualDeficiencia, telefone1,
        formattedAppsDisponiveis, telefone2, formattedAppsDisponiveis2, estadoCivil, racaCor, genero,
        identidadeGenero, grauInstrucao, ocupacao, informarOutros, adminPublica
      ]
    ];

    const response = await appendData(values);
    res.json(response);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
