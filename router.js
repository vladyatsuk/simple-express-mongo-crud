const express = require('express');
const Employee = require('./Employee');

const router = express.Router();

router.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.render('employees.hbs', { employees });
  } catch (e) {
    console.log(e);
    res.status(500).send('Error fetching employees');
  }
});

router.get('/employees/json', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (e) {
    console.log(e);
    res.status(500).send('Error fetching employees');
  }
});

router
  .route('/employee/add')
  .get((req, res) => {
    try {
      res.render('addEmployee.hbs');
    } catch (e) {
      console.log(e);
      res.status(500).send('Cannot fetch an employee');
    }
  })
  .post(async (req, res) => {
    try {
      const { lastName, roomNumber } = req.body;
      await Employee.create({ lastName, roomNumber });

      res.render('result.hbs', { result: 'Added successfully' });
    } catch (e) {
      console.log(e);
      res.status(500).send('Cannot update an employee');
    }
  });

router
  .route('/employee/edit/:id')
  .get(async (req, res) => {
    try {
      const id = req.params.id;
      const employee = await Employee.findOne({ _id: id });

      res.render('editEmployee.hbs', employee);
    } catch (e) {
      console.log(e);
      res.status(500).send('Something bad happened');
    }
  })
  .put(async (req, res) => {
    try {
      const {
        id: _id,
        newLastName: lastName,
        newRoomNumber: roomNumber,
      } = req.body;

      await Employee.findOneAndUpdate(
        { _id },
        { lastName, roomNumber }
      );
    } catch (e) {
      res.status(500).send('Something bad happened');
    }
  });

router.delete('/employee/delete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    await Employee.deleteOne({ _id: id });

    res.render('result.hbs', { result: 'Deleted successfully' });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
