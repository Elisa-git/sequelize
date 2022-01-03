const { Router } = require("express");
const PessoaCont = require('../controllers/PessoaCont');

const router = Router();

router.get('/pessoas', PessoaCont.pegaAllRegistrosPessoas);
router.get('/pessoas/:id', PessoaCont.pegaUmRegistroPessoa);
router.post('/pessoas', PessoaCont.criaPessoa);
router.put('/pessoas/:id', PessoaCont.atualizaPessoa);
router.delete('/pessoas/:id', PessoaCont.deletaPessoa);

module.exports = router;


