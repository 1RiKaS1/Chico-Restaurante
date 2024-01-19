import Prato from "../models/pratoModel.js";
import upload from "../middlewares/image.js";

class PratoController {
    async index(req, res){
        try {
            const prato = await Prato.find();
            return res.json(prato);
        } catch (e) {
            console.log(e);
            return res.status(500).json({error: 'Internal server error'});
        }
    }
    
    async show(req, res){
        try {
            const { id } = req.params;
            const prato = await Prato.findById(id);
            return res.json(prato);
        } catch (e) {
            console.log(e);
            return res.status(500).json({error: 'Internal server error'});
        }
    }

    async create(req, res){
        try{
            const {nome, preco, descricao, categoria, serve} = req.body;

            const prato = await Prato.findOne({nome, serve});
            if(prato) {
                return res.status(422)
                .json({mensagem: `Prato ${nome} para ${serve} já cadastrado!`})
            }
            
            const newPrato = new Prato(req.body);
            await newPrato.create();

            // Se houver erros
            if(newPrato.errors.length > 0){
                req.flash('errors', newPrato.errors);
                req.session.save(function(){
                    return res.redirect('back');
                });
                return;
            }
        
            // res.send(newPrato.errors);
            return res.status(201).json(newPrato);
        } catch(e){
            console.log(e);
            return res.render('404');
        }
    };

    async update(req, res){
        try {
            const prato = await Prato.findById(req.params.id);
            
            if(!prato) return res.status(404).json({error: 'Object not found'});
            
            await prato.updateOne(req.body);
            return res.status(200).json(prato);
        } catch (e) {
            console.log(e);
            return res.render('404').json({error: 'Object not found'});
        }
    }

    async delete(req, res){
        try {
            const prato = await Prato.findById(req.params.id);

            if(!prato) return res.status(404).json({error: 'Object not found'});

            await Prato.deleteOne(prato);

            return res.status(200).json({message: 'Object deleted'});
        } catch (e) {
            console.log(e);
            return res.render('404');
        }
    }
}

export default new PratoController