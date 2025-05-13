const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const Attendance = require('./models/Attendance');

app.post('/api/attendance', async (req, res) => {
  const { name, descriptor } = req.body;
  if (!name || !descriptor) return res.status(400).json({ message: 'Data tidak lengkap.' });

  const now = new Date();
  await Attendance.create({ name, descriptor, date: now });
  res.json({ message: `Presensi berhasil dicatat untuk ${name}` });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));