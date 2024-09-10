import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, This is backend!<h1>');
    console.log('Backend server is running...');
});

app.listen(8800, () => {
    console.log('Backend server is listening...');
});