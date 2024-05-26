const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  lastName: {
    type: String,
    required: true
  },
  roomNumber: {
    type: Number,
    required: true
  },
});

module.exports = mongoose.model('Employee', employeeSchema);