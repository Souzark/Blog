const express = require('express');
const router = express.Router();

// Exemplo de rota dentro do admin
router.get('/', (req, res) => {
  res.send('Página de administração');
});

router.get('/posts', (req, res) => {
  res.send('Lista de posts');
});

module.exports = router; // Exportando o roteador corretamente
