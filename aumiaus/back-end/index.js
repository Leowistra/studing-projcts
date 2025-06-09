const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para aceitar JSON e habilitar CORS
app.use(cors());
app.use(express.json());

// Rota POST para receber os dados do formulário
app.post('/api/contato', (req, res) => {
    const { nome, email, mensagem } = req.body;

    console.log('Mensagem recebida:');
    console.log(`Nome: ${nome}`);
    console.log(`E-mail: ${email}`);
    console.log(`Mensagem: ${mensagem}`);

    // Simula resposta da API
    res.status(200).json({ success: true, message: 'Mensagem recebida com sucesso!' });
});

// Servir arquivos estáticos do front end
app.use(express.static(path.join(__dirname, '..', 'front-end')));

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});