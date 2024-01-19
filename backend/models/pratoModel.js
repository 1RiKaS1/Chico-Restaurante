import mongoose from "mongoose";

// Adicionando o schema no mongoose
const pratoSchema = new mongoose.Schema({
    imagem: { 
        data: Buffer, 
        contentType: String
    },
    nome: { type: String, required: true},
    preco: { type: Number, required: true },
    descricao: { type: String, required: true },
    categoria: { type: String, required: true },
    serve: { type: String, required: true },
});

const PratoModel = mongoose.model('Prato', pratoSchema);

// Criando a classe Prato
class Prato extends PratoModel{
    constructor(body) {
        super();
        this.body = body;
        this.errors = [];
        this.prato = null;
    }


    // Método de registro de prato
    async create(){
        this.cleanUp();
        try{
            // if(this.errors.length > 0) return;
            this.prato = await PratoModel.create(this.body);
        } catch(e){
            console.log(e);
        }
    
    }

    // Método de atualização de prato
    async update(){
        try{
            if(this.errors.length > 0) return;
            this.prato = await PratoModel.updateOne(this.body);
        } catch(e){
            console.log(e);
        }
    }

    // Método de remoção de prato
    async delete(){
        try{
            if(this.errors.length > 0) return;
            this.prato = await PratoModel.deleteOne();
        } catch(e){
            console.log(e);
        }
    
    }

    // Limpeza de dados
    cleanUp(){
        this.body = {
            nome: this.body.nome,
            preco: this.body.preco,
            descricao: this.body.descricao,
            categoria: this.body.categoria,
            serve: this.body.serve,
        };
    }
}

export default Prato;
export {PratoModel};