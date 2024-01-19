import mongoose from "mongoose";    

const pedidoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    endereco: { type: String, required: true },
    pratos: { type: Array, required: true },
});

const PedidoModel = mongoose.model('Pedido', pedidoSchema);

class Pedido extends PedidoModel{
    constructor(nome, endereco, pratos) {
        super();
        this.nome = nome;
        this.endereco = endereco;
        this.pratos = pratos;
        this.pedido = null;
    }

    // Método de registro do pedido
    async order(){
        const nome = this.nome;
        const endereco = this.endereco;
        const pratos = this.pratos;

        try {
            this.pedido = await PedidoModel.create({nome, endereco, pratos});
        } catch (e) {
            console.log(e);
        }
    } 
}

export default Pedido