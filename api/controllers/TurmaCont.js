const database = require('../models');

class TurmaCont {
    static async pegaAllRegistrosTurmas(req, res) {
        try {
            const allRegistrosTurmas = await database.Turmas.findAll();
            return res.status(200).json(allRegistrosTurmas);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async pegaUmRegistroTurma(req, res) {
        try {
            
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaCont;