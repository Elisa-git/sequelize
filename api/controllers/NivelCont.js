const database = require('../models');

class NivelCont {

    static async pegaAllRegistrosNiveis(req, res) {
        try {
            const allRegistrosNiveis = await database.Niveis.findAll()
            return res.status(200).json(allRegistrosNiveis);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmRegistroNiveis(req, res) {
        const { id } = req.params;
        try {
            const umNivel = await database.Niveis.findOne({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(umNivel);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaNivel(req, res) {
        const novoNivel = req.body;
        try {
            const novoNivelCriado = await database.Niveis.create(novoNivel);
            return res.status(200).json(novoNivelCriado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaNivel(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Niveis.update(novaInfo, {
                where: {
                    id: Number(id)
                }
            });

            const nivelAtualizado = await database.Niveis.findOne( {
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(nivelAtualizado);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaNivel(req, res) {
        const { id } = req.params;
        try {
            await database.Niveis.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!`});

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = NivelCont;