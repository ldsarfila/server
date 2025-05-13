const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  name: String,
  descriptor: [Number],
  date: Date
});

module.exports = mongoose.model('Attendance', attendanceSchema);