import express from 'express';
import Categoria from '../models/Categoria.js';  // Importação padrão

const router = express.Router();

// Rota para a página inicial do admin
router.get('/', (req, res) => {
    res.render('admin/index');
});

// Rota para listar os posts
router.get('/posts', (req, res) => {
    res.render('admin/posts');
});

// Rota para listar as categorias
router.get('/categorias', (req, res) => {
    res.render('admin/categorias');
});

// Rota para adicionar uma nova categoria
router.get('/categorias/add', (req, res) => {
    res.render('admin/addcategorias');
});

// Rota para salvar uma nova categoria
router.post('/categorias/nova', (req, res) => {
    const novaCategoria = {
        name: req.body.name,  // Agora usa 'name' conforme o Mongoose espera
        slug: req.body.slug
    };

    new Categoria(novaCategoria)
        .save()
        .then(() => {
            console.log('Categoria salva com sucesso');
            res.redirect('/admin/categorias');
        })
        .catch((err) => {
            console.log('Erro ao salvar categoria:', err);
            res.redirect('/admin/categorias');
        });
});

export default router;
