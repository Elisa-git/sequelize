const { Router } = require("express");
const PessoaCont = require('../controllers/PessoaCont');

const router = Router();

router.get('/pessoas', PessoaCont.pegaAllRegistrosPessoas);

module.exports = router;