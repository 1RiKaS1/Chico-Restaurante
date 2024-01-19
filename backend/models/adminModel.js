// Criação do modelo de dados do administrador
import mongoose from 'mongoose';

// Adicionando o schema no mongoose
const adminSchema = new mongoose.Schema({
    email: { type: String, required: true},
    senha: { type: String, required: true}
});

const AdminModel = mongoose.model('Admin', adminSchema);

// Criando a classe Admin
class Admin extends AdminModel{

    constructor(body) {
        super();
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    // Método de registro de usuário
    async register(){
        this.valida();
        // Verifica se há erros e regstra o novo administrador
        try{
            if(this.errors.length > 0) return;
            this.user = await AdminModel.create(this.body);
        } catch(e){
            console.log(e);
        }
    }

    // Método de autenticação de usuário
    async login(){
        this.valida();
        // Verifica se há erros e loga o administrador
        try{
            if(this.errors.length > 0) return;
            this.user = await AdminModel.findOne({ email: this.body.email });
            if(!this.user) {
                this.errors.push('Usuário não existe');
                return;
            }
            if(this.body.senha !== this.user.senha) {
                this.errors.push('Senha incorreta');
                this.user = null;
                return;
            }
        } catch(e){
            console.log(e);
        }
    }

    // Validação de dados
    valida(){
        this.cleanUp();
        
        // Validação da senha
        if(!this.body.senha || typeof this.body.senha !== 'string') 
        this.errors.push('Senha inválida');
    }

    // Limpeza de dados
    cleanUp(){
        for(const key in this.body){
            if(typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            senha: this.body.senha,
        };
    }
}

export default Admin;