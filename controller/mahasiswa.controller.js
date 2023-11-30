const { Mahasiswa } = require('../models')

const getAllMahasiswa = async (req, res) => {
    try {
        console.log(Mahasiswa)
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

module.exports = {
    getAllMahasiswa,
}