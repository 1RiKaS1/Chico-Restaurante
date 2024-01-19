import jwt from "jsonwebtoken";

import Admin from "../models/AdminModel.js";
import { checkPassword } from "../services/hash.js";

import authConfig from "../config/auth.js";

class SessionController{
    async store(req, res){
        const { email, senha } = req.body;

        const admin = await Admin.findOne({ email });

        if(!admin){
            return res.status(401).json({ error: "Usuário/senha inválida." });
        }

        if(!checkPassword(senha, admin.senha)){
            return res.status(401).json({ error: "Usuário/senha inválida." });
        }

        const { _id } = admin;

        return res.json({
            admin: { email, senha },
            token: jwt.sign({ _id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        });
    }
}

export default new SessionController();