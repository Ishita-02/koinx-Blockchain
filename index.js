require('dotenv').config();
const express = require('express');
const connectDB = require('./db');
const cron = require('node-cron');
const transactionsRouter = require('./routes/index');
const getEthPrice = require('./helpers/getEthPrice')

connectDB();
const app = express();

app.use(express.json());

app.use('/api', transactionsRouter);

cron.schedule('*/10 * * * *', () => {
    console.log('Fetching Ethereum price...');
    getEthPrice();
});

app.get('/', (req, res) => {
    res.send('Welcome to Ethereum Price Tracker');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
