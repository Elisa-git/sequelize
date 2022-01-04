const { Router } = require("express");
const TurmaCont = require('../controllers/TurmaCont');

const router = Router()

router
    .get('/turmas', TurmaCont.pegaAllRegistrosTurmas)
    .get('/turmas/:id', TurmaCont.pegaUmRegistroTurma)
    .post('/turmas', TurmaCont.criaTurma)
    .put('/turmas/:id', TurmaCont.atualizaTurma)
    .delete('/turmas/:id', TurmaCont.deletaTurma)

module.exports = router;