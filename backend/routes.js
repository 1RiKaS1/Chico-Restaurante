import { Router } from 'express';

import LoginController from './controllers/loginController.js';
import PratoController from './controllers/pratoController.js';
import PedidoController from './controllers/pedidoController.js';
import SessionController from './controllers/sessionsController.js';

import auth from './middlewares/auth.js';

const router = new Router();

// Rota de login
router.post('/login', SessionController.store);

// Rota de pratos
router.get('/', PratoController.index);
router.get('/prato/:id', PratoController.show);


// Rotas de login/cadastro
router.get('/login', LoginController.login);   
router.post('/register', LoginController.register);

router.use(auth);

// Rotas de administração
router.get('/admin', PratoController.index);
router.post('/admin/create', PratoController.create);
router.put('/admin/update/:id', PratoController.update);
router.delete('/admin/delete/:id', PratoController.delete);
router.get('/admin/pedidos', PedidoController.showPedidos);

// Rota de pedidos
router.post('/pedido', PedidoController.order);

export default router;
