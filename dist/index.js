"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const router_1 = require("./src/routers/router");
const PORT = 3000;
const app = (0, express_1.default)();
const DB_URL = 'mongodb://127.0.0.1:27017/StudentManager';
mongoose_1.default.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(router_1.router);
app.listen(PORT, 'localhost', () => {
    console.log(`Server running on http://localhost:${PORT}/create`);
});
//# sourceMappingURL=index.js.map