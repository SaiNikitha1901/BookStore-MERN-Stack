import express from 'express';
import { PORT,MONGODB_URI } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModels.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to MERN Stack Project")
});
app.use('/books',booksRoute);
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log(" App connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
});
    })
    .catch((error) => {
        console.error(error);
    });