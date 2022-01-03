const { Router } = require("express");
const TurmaCont = require('../controllers/TurmaCont');

const router = Router()

router
    .get('/turmas', TurmaCont.pegaAllRegistrosTurmas)
    .get('/turmas/:id', TurmaCont.pegaUmRegistroTurma)

module.exports = router;