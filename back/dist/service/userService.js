"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUserById = exports.getAllUsers = void 0;
const credentialService_1 = require("./credentialService");
let users = [];
let currentUserId = 1;
const getAllUsers = () => {
    return users;
};
exports.getAllUsers = getAllUsers;
const getUserById = (id) => {
    return users.find(user => user.id === id);
};
exports.getUserById = getUserById;
const createUser = (name, email, birthdate, nDni, username, password) => {
    const credentialsId = (0, credentialService_1.createCredential)(username, password);
    const newUser = {
        id: currentUserId++,
        name,
        email,
        birthdate,
        nDni,
        credentialsId,
    };
    users.push(newUser);
    return newUser;
};
exports.createUser = createUser;
