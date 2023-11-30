# mahasiswa-prodi-lembaga-backend-exprseql

Proyek server API untuk frontend: https://github.com/Aldi-H/mahasiswa-prodi-lembaga

Backend menggunakan Node.js, dengan express.js dan Sequelize ORM

Setup:
1. Jalankan `npm install` pada terminal
2. Copy file `.env.example`, ubah namanya menjadi `.env`
3. Konfigurasi file `.env` sesuai database
4. Tambahkan secret key baru pada `JWT_SECRET` pada file `.env`
5. Jalankan `npx sequelize-cli db:migrate` dan `npx sequelize-cli db:seed:all` pada terminal untuk melakukan migrasi serta mengisi tabel prodi dan mata kuliah
6. Jalankan `npm run serve` pada terminal untuk menjalankan server