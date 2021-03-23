const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  organization: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('member', memberSchema);
