import Admin from '../models/AdminModel.js';

import { createPassowrdHash } from '../services/hash.js';

class LoginController {
    // Método de listagem
    async index(req, res){
        try {
            const admin = await Admin.find();
            return res.json(admin);
        } catch (e) {
            console.log(e);
            return res.status(500).json({error: 'Internal server error'});
        }
    }

    // Método de login
    async login(req, res){
        try {
            const admin = new Admin(req.body);
            await admin.login();
            // if(admin.errors.length > 0){
            //     req.flash('errors', admin.errors);
            //     req.session.save(function(){
            //         return res.redirect('back');
            //     });
            //     return;
            // }
            // req.flash('success', 'Login efetuado com sucesso');
            req.session.user = admin.user;
            req.session.save(function(){
                return res.redirect('/admin');
            });
        } catch (e) {
            console.log(e);
            return res.render('404');
        }
    };
    
    // Método de registro
    async register(req, res){
        try{
            const {email, senha} = req.body;

            const admin = await Admin.findOne({email});
            if(admin) {
                return res.status(422)
                .json({mensagem: `Usuário ${email} já cadastrado!`})
            }            

            const hash = await createPassowrdHash(senha);

            const newAdmin = new Admin({email, senha: hash});
            await newAdmin.register();

            //Se houver erros
            // if(newAdmin.errors.length > 0){
            //     req.flash('errors', newAdmin.errors);
            //     req.session.save(function(){
            //         return res.redirect('back');
            //     });
            //     return;
            // }
        
            // res.send(newAdmin.errors);
            return res.status(201).json(newAdmin);
        } catch(e){
            console.log(e);
            return res.render('404');
        }
    };
}

export default new LoginController();
