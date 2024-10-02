import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';

const app = express();

// Import all routes here
import notificationRouter from './src/routes/notification.js';
import getemployeesForEIMRouter from './src/routes/getemployeesForEIM.js';

// Use all routes here
app.use(notificationRouter);
app.use(getemployeesForEIMRouter);

// Middleware
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>Hello, This is backend!<h1>');
    console.log('Backend server is running...');
});




app.listen(8800, () => {
    console.log('Backend server is listening...');
});