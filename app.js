const express = require('express');
const path = require('path');
const app = express();
const PORT = 3009;

// Rota para carregar uma página HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'quemsou.html'));
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
