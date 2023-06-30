import express from 'express';
import { StudentManager } from '../controllers/student.controller';
export const router = express.Router();
router.get('/create', StudentManager.getCretePage);
router.post('/create', StudentManager.createStudent);
router.get('/list', StudentManager.getListStudent);
router.get('/update/:id', StudentManager.getUpdatePage);
router.post('/update/:id', StudentManager.updateStudent);
router.get('/delete/:id', StudentManager.deleteStudent);
router.get('/detail/:id', StudentManager.getInfoStudent);


