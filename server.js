const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const memberURL = require('./src/router/memberRouter');

const app = express();
app.use(express.json());
app.use('/member', memberURL);

const databaseURL = process.env.MONGODB_URI;

mongoose
  .connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console('Error connecting');
  });

app.get('/', (res, req) => {
  res.json('App running');
});

const PORT = 5050;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
