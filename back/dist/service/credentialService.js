"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCredential = exports.createCredential = void 0;
let credentials = [];
let currentCredentialId = 1;
const createCredential = (username, password) => {
    const newCredential = {
        id: currentCredentialId++,
        username,
        password,
    };
    credentials.push(newCredential);
    return newCredential.id;
};
exports.createCredential = createCredential;
const validateCredential = (username, password) => {
    const credential = credentials.find(c => c.username === username && c.password === password);
    return credential ? credential.id : null;
};
exports.validateCredential = validateCredential;
