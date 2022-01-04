const { Router } = require("express");
const PessoaCont = require('../controllers/PessoaCont');

const router = Router();

router
    .get('/pessoas', PessoaCont.pegaAllRegistrosPessoas)
    .get('/pessoas/:id', PessoaCont.pegaUmRegistroPessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaCont.pegaUmaMatricula)
    .post('/pessoas', PessoaCont.criaPessoa)
    .post('/pessoas/:estudanteId/matricula', PessoaCont.criaMatricula)
    .put('/pessoas/:id', PessoaCont.atualizaPessoa)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaCont.atualizaMatricula)
    .delete('/pessoas/:id', PessoaCont.deletaPessoa)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaCont.deletaMatricula)

module.exports = router;


