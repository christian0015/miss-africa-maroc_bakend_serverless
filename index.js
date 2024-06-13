// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();


const app = express();

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
