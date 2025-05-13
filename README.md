# Student Attendance with Face Recognition

## 🌐 Tech Stack
- Frontend: HTML, JS (face-api.js)
- Backend: Node.js, Express.js
- Database: MongoDB (Atlas)

## 🚀 Deployment

### Frontend
1. Upload folder `client/` ke Vercel atau Netlify.
2. Pastikan `models` folder berisi file model dari face-api.js (sudah disertakan dummy).
3. Pastikan URL backend diganti sesuai deployment backend.

### Backend
1. Deploy folder `server/` ke Render atau Railway.
2. Atur variabel environment `MONGO_URI` dari MongoDB Atlas.
3. Endpoint aktif di: `https://your-backend-url.com/api/attendance`

### Face API Models
Model dummy sudah disertakan.
Download versi asli dari:
https://github.com/justadudewhohacks/face-api.js-models
Letakkan ke `client/models/`

## ✅ Fitur
- Deteksi wajah real-time via webcam
- Simpan presensi ke database dengan nama dan descriptor wajah
- Siap digunakan via browser dan hosting online
