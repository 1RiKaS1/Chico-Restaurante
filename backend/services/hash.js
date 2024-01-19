import bcrypt from 'bcryptjs';

// Criptografar a senha
export const createPassowrdHash = async (password) => bcrypt.hash(password, 8);

// Comparar a senha para login
export const checkPassword = async (password, hash) => 
                        bcrypt.compare(password, hash);
