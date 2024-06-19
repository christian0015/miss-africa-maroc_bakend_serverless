// routes/votes.js
const express = require('express');
const router = express.Router();
const paypal = require('paypal-rest-sdk');
const User = require('../models/User');
require('dotenv').config();

paypal.configure({
  mode: 'live', // Changez en 'live' pour la production
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_SECRET
});

const MAD_TO_EUR = 0.0907; // Taux de conversion de MAD à EUR

router.post('/create-payment', (req, res) => {
  const { amount, userId } = req.body;
  const formattedAmount = (amount * MAD_TO_EUR).toFixed(2); // Convertir le montant de MAD à EUR

  // Assurer que le montant est dans la plage autorisée par PayPal (min: 0.01, max: 10,000)
  const amountEUR = Math.min(Math.max(parseFloat(formattedAmount), 0.01), 10000).toFixed(2);

  const create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": `https://missma.vercel.app/success?amount=${amount}&userId=${userId}`,
      "cancel_url": `https://missma.vercel.app/cancel`
    },
    "transactions": [{
      "item_list": {
        "items": [{
          "name": "Vote",
          "sku": "001",
          "price": amountEUR,
          "currency": "EUR", // Utiliser la devise EUR
          "quantity": 1
        }]
      },
      "amount": {
        "currency": "EUR", // Utiliser la devise EUR
        "total": amountEUR
      },
      "description": `Vote pour la candidate numero ${userId}`
    }]
  };

  paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
      console.error(error);
      res.status(500).send('Error creating PayPal payment');
    } else {
      const approval_url = payment.links.find(link => link.rel === 'approval_url').href;
      res.json({ approval_url });
    }
  });
});

router.get('/success', (req, res) => {
  const { paymentId, PayerID, amount, userId } = req.query;

  const amountEUR = (amount * MAD_TO_EUR).toFixed(2);

  const execute_payment_json = {
    "payer_id": PayerID,
    "transactions": [{
      "amount": {
        "currency": "EUR",
        "total": amountEUR
      }
    }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, async function (error, payment) {
    if (error) {
      console.error(error.response);
      res.status(500).send('Error executing PayPal payment');
    } else {
      let points = 0;
      const amountMAD = parseFloat(amount);

      if (amountMAD == 1) points = 1;
      else if (amountMAD == 5) points = 5;
      else if (amountMAD == 10) points = 10;

      await User.findByIdAndUpdate(userId, { $inc: { points: points } });

      res.json({ message: "Payment successful" });
    }
  });
});

module.exports = router;
