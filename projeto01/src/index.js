const express = require('express');
const bodyParser = require('body-parser');
const { adicionarCliente } = require('./database/banco');

const app = express();
app.use(bodyParser.json());

app.post('/cadastro/:nome/:sobrenome/:idade', async (req, res) => {
    const { nome, sobrenome, idade } = req.params;
    try {
        const resultado = await adicionarCliente(nome, sobrenome, idade);
        res.status(201).send(resultado);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
