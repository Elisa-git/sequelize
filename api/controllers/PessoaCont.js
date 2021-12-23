const database = require('../models')               //Importa index.js

class PessoaCont {
    //Não recebe parâmetros, por isso não precisa da classe construtora
    
    // Métodos

    static async pegaAllRegistrosPessoas(req, res) {                        // static: método pode ser chamado sem criar uma nova instancia
                                                                            // async: indica que o método só devolverá a resposta assim que todos os métodos internos forem feitos
        try {
            const allRegistrosPessoas = await database.Pessoas.findAll();        //Const que vai guardar o resultado do que foi buscado no banco. Vai na database, buscando o return Pessoas e trazer todos os resultados lá dentro. O await indica que o js vai esperar o resultado enquanto a ação ocorre
            return res.status(200).json(allRegistrosPessoas);
        }  
        
        catch(error) {
            return res.status(500).json(error.message);
        }
                                                                            
    }
}

module.exports = PessoaCont;