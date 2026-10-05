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
const aluno1 = await Aluno.create({
    nome: 'Ana Silva',
    matricula: '202789',
    curso: 'Desenvolvimento de Sistemas'
});

console.log(`Aluno criado: ${aluno1.nome}`);

        // ===========================================
        // READ (Buscar registros)
        // ===========================================

        // Buscar Todos
const todosAlunos = await Aluno.findAll();

console.log(`Temos ${todosAlunos.length} alunos cadastrados`);
        
        
        // Buscar com condição WHERE
const umAluno = await Aluno.findOne({
    where: { matricula: '202789' }
});

console.log(`Busca Especifica: ${umAluno.nome} está no curso ${umAluno.curso}`);
        

        // ======================================
        // UPDATE (Atualizar registros)
        // ======================================
await Aluno.update(
    { curso: 'Engenharia de Software' },
    { where: { matricula: '202789' } }
);

console.log('Curso Atualizado');

        // ======================================
        // DELETE (Remover registros)
        // ======================================
await Aluno.destroy({
        where: { matricula: '202789' }
});

console.log('Registro deletado');

    } catch (error) {
        console.error('Erro de conexão ou execução: ', error);
    }
}

executarApp();