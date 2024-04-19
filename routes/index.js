const express = require('express');
const router = new express.Router();

const { GetTransactionsByAddress } = require('../controllers/getTransactionByAddress');


router.get('/getTransactionsByAddress/:walletAddress', GetTransactionsByAddress);


module.exports = router;