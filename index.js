const sequelize = require('./src/banco/databse');
const Aluno = require('./src/model/Aluno');

async function executarApp() {
    try {
        //1. Sincroniza o Model com o Banco de Dados
        //Atenção: { force:true } recria a tabela toda vez. Use apenas para Testes
        await sequelize.sync({ force:true });
        console.log('Tabelas sincronizadas com sucesso!')

        // ===========================================
        // CREATE (Inserir registros)
        // ===========================================

        // ===========================================
        // READ (Buscar registros)
        // ===========================================

        // Buscar Todos
        
        
        // Buscar com condição WHERE
        

        // ======================================
        // UPDATE (Atualizar registros)
        // ======================================
        

        // ======================================
        // DELETE (Remover registros)
        // ======================================

    } catch (error) {
        console.error('Erro de conexão ou execução: ', error);
    }
}

executarApp();