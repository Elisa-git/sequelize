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

    static async pegaUmRegistroPessoa(req, res) {
        const { id } = req.params;
        try {               // os parâmetros devem entrar em forma deobjeto, por isso o {}
        
            const umaPessoa = await database.Pessoas.findOne({
                where: {
                    id: Number(id) 
                }
            });
        
            return res.status(200).json(umaPessoa);
        
        } catch (error) {
        
            return res.status(500).json(error.message);
        
        }
    }

    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            const umaMatricula = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            return res.status(200).json(umaMatricula);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async criaPessoa(req, res) {
        const novaPessoa = req.body;
        try {

            const novaPessoaCriada = await database.Pessoas.create(novaPessoa);
            return res.status(200).json(novaPessoaCriada);

        } catch (error) {

            return res.status(500).json(error.message);

        }
    }

    static async criaMatricula(req, res) {
        const { estudanteId } = req.params;
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId) }
        try {
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async atualizaPessoa(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
        
            await database.Pessoas.update(novaInfo, {
                where: {
                    id: Number(id)
                }
            });
            const pessoaAtualizada = await database.Pessoas.findOne( {
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json(pessoaAtualizada);
        
        } catch (error) {

            return res.status(500).json(error.message);

        }
    }

    static async atualizaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        const novaInfo = req.body;
        try {
            await database.Matriculas.update(novaInfo, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(estudanteId)
                }
            });
            const matriculaAtualizada = await database.Matriculas.findOne({
                where: {
                    id: Number(matriculaId)
                }
            });
            
            return res.status(200).json(matriculaAtualizada);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async deletaPessoa(req, res) {
        const { id } = req.params;
        try {
            
            await database.Pessoas.destroy({
                where: {
                    id: Number(id)
                }
            });
            return res.status(200).json({ mensagem: `id ${id} deletado com sucesso!`});
        } catch (error) {

            return res.status(500).json(error.message);

        }
    }

    static async deletaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId)
                }
            });
            return res.status(200).json({ mensagem: `id ${matriculaId} deletado com sucesso!`});

        } catch (error) {
            return res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaCont;