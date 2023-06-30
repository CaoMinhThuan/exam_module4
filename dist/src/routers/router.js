"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("../controllers/student.controller");
exports.router = express_1.default.Router();
exports.router.get('/create', student_controller_1.StudentManager.getCretePage);
exports.router.post('/create', student_controller_1.StudentManager.createStudent);
exports.router.get('/list', student_controller_1.StudentManager.getListStudent);
exports.router.get('/update/:id', student_controller_1.StudentManager.getUpdatePage);
exports.router.post('/update/:id', student_controller_1.StudentManager.updateStudent);
exports.router.get('/delete/:id', student_controller_1.StudentManager.deleteStudent);
exports.router.get('/detail/:id', student_controller_1.StudentManager.getInfoStudent);
//# sourceMappingURL=router.js.map