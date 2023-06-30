import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { router } from './src/routers/router';
const PORT = 3000;
const app = express();
const DB_URL = 'mongodb://127.0.0.1:27017/StudentManager';
mongoose.connect(DB_URL)
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(router);



app.listen(PORT, 'localhost', () => {
    console.log(`Server running on http://localhost:${PORT}/create`)
});