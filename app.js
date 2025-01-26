import express from 'express';
import { engine } from 'express-handlebars';
import mongoose from 'mongoose';
import adminRoutes from './routes/admin.js';  // Importação correta
import path from 'path';

const app = express();

// Configurações
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars
app.engine('handlebars', engine({
  defaultLayout: 'main',
  partialsDir: path.join(path.resolve(), 'views/partials')
}));
app.set('view engine', 'handlebars');

// Conexão com o MongoDB
mongoose
  .connect('mongodb://127.0.0.1:27017/blogDB')
  .then(() => {
    console.log('Conectado ao MongoDB com sucesso');
  })
  .catch((err) => {
    console.error('Erro ao conectar ao MongoDB:', err);
  });

// Public
app.use(express.static(path.join(path.resolve(), 'public')));

// Rotas
app.use('/admin', adminRoutes); // Usando a variável correta para rotas

// Servidor
const PORT = 8081;
app.listen(PORT, () => {
  console.log(`Servidor rodando na URL http://localhost:${PORT}`);
});
