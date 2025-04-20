"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/api/v1', (req, res) => {
    res.send("<h2>Hello I am here </h2>");
});
app.listen(3000, () => {
    console.log("The server is active");
});
