const express = require('express');
const { engine } = require('express-handlebars');
const mongoose = require('mongoose');
const app = express();
const admin = require('./routes/admin'); // Importando as rotas de admin
const path = require('path');

// Configurações
// Express    
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Conexão com o MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/aprendendo')
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// Public
app.use(express.static(path.join(__dirname, 'public')));

// Rotas
app.use('/admin', admin); // Certifique-se de que o admin exporta um Router

// Servidor
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na URL http://localhost:${PORT}`);
});
