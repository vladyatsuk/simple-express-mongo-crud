const mongoose = require('mongoose');
const db = 'employeesdb';
const uri = 'mongodb://localhost:27017/' + db;

const connect = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Connected successfully');
  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

module.exports = connect;