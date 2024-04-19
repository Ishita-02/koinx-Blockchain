const express = require('express');
const router = new express.Router();

const { GetTransactionsByAddress } = require('../controllers/getTransactionByAddress');
const GetEthPrice = require('../controllers/getEthPrice');


router.get('/getTransactionsByAddress/:walletAddress', GetTransactionsByAddress);
router.post('/getEthPrice', GetEthPrice);


module.exports = router;