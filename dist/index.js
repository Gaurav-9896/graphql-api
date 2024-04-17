"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./src/server");
(0, server_1.startServer)().catch(error => {
    console.error('Error starting the server:', error);
});
