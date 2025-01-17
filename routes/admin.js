const express = require('express');
const router = express.Router();

// Defina suas rotas de admin aqui
router.get('/', (req, res) => {
    res.render('admin/index');
});

module.exports = router;
