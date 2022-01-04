const { Router } = require("express");
const NivelCont = require('../controllers/NivelCont');

const router = Router();

router.get('/niveis', NivelCont.pegaAllRegistrosNiveis);
router.get('/niveis/:id', NivelCont.pegaUmRegistroNiveis);
router.post('/niveis', NivelCont.criaNivel);
router.put('/niveis/:id', NivelCont.atualizaNivel);
router.delete('/niveis/:id', NivelCont.deletaNivel);

module.exports = router;