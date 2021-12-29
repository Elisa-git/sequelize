const { Router } = require("express");
const PessoaCont = require('../controllers/PessoaCont');

const router = Router();

router.get('/pessoas', PessoaCont.pegaAllRegistrosPessoas);
router.get('/pessoas/:id', PessoaCont.pegaUmRegistroPessoa);
router.post('/pessoas', PessoaCont.criaPessoa);

module.exports = router;