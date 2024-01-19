import jwt from 'jsonwebtoken';

import authConfig from '../config/auth.js';
import { promisify } from 'util';

// Método de autenticação de usuário
export default async (req, res, next) => {
    // Verifica se há token
    const authHeader = req.headers.authorization;
    
    if(!authHeader){
        return res.status(401).json({ message: "Token não identificado" });
    }

    const [, token] = authHeader.split(' ');

    // Verifica se o token é válido
    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret);
        req.userId = decoded.id;

        return next();
    } catch (e) {
        return res.status(401).json({ message: "Não autorizado" });
    }
}