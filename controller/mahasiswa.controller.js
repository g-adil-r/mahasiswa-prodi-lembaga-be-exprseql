const Mahasiswa = require('../models/mahasiswa')

const getAllMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findAll();

        res.status(200).json({
            message: "Mendapatkan semua mahasiswa",
            mahasiswa,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

const addNewMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.create({
            nim: req.body.nim,
            nama: req.body.nama,
            angkatan: req.body.angkatan,
            password: req.body.password,
            prodiId: req.body.prodiId
        });

        res.status(200).json({
            message: "Membuat satu mahasiswa",
            mahasiswa,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAllMahasiswa,
    addNewMahasiswa
}