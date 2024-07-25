"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserHandler = exports.registerUserHandler = exports.getUserByIdHandler = exports.getAllUsersHandler = void 0;
const userService_1 = require("../service/userService");
const getAllUsersHandler = (req, res) => {
    const users = (0, userService_1.getAllUsers)();
    res.json(users);
};
exports.getAllUsersHandler = getAllUsersHandler;
const getUserByIdHandler = (req, res) => {
    const user = (0, userService_1.getUserById)(parseInt(req.params.id));
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).send('Usuario no encontrado');
    }
};
exports.getUserByIdHandler = getUserByIdHandler;
const registerUserHandler = (req, res) => {
    const { name, email, birthdate, nDni, username, password } = req.body;
    const newUser = (0, userService_1.createUser)(name, email, new Date(birthdate), nDni, username, password);
    res.status(201).json(newUser);
};
exports.registerUserHandler = registerUserHandler;
const loginUserHandler = (req, res) => {
    const { username, password } = req.body;
    const credentialsId = validateCredential(username, password);
    if (credentialsId !== null) {
        res.json({ message: 'Login exitoso', credentialsId });
    }
    else {
        res.status(401).send('Credenciales inválidas');
    }
};
exports.loginUserHandler = loginUserHandler;
function validateCredential(username, password) {
    throw new Error('Function not implemented.');
}
