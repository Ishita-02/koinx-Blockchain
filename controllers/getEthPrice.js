const express = require('express');
const cron = require('node-cron');
const ethPriceSchema = require('../models/ethPriceSchema');
const crypto = require('crypto');
const getEthPrice = require('../helpers/getEthPrice');

const getRandomId = () => {
  return crypto.randomBytes(8).toString('hex');
};

const GetEthPrice = async (request, response) => {
  try {
    const task = cron.schedule('*/10 * * * *', async () => {
      const ethPriceInINR = await getEthPrice();
      await ethPriceSchema.create({
        _id: getRandomId(),
        inr: ethPriceInINR
      });
    }, {
      scheduled: false
    });

    await task.start();

    return response.status(200).json({
      success: true,
      message: "Eth Price collection Job Started"
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = GetEthPrice;
