import Pedido from "../models/pedidoModel.js"; 

class PedidoController{

    // Método de registro do pedido
    async order(req, res){
        try {
            const {nome, endereco, pratos} = req.body;

            const pedido = new Pedido(nome, endereco, pratos);
            await pedido.order();
            res.status(200).json({ message: "Pedido registrado com sucesso" });
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Internal server error" });
        }
    }

    // Método de listagem de pedidos
    async showPedidos(req, res){
        try {
            const pedidos = await Pedido.find();
            res.status(200).json(pedidos);
        } catch (e) {
            console.log(e);
            res.status(500).json({ message: "Internal server error" });
        }
    }
}

export default new PedidoController();