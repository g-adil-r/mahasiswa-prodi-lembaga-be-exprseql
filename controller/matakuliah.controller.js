const { Matakuliah } = require('../models')

const getAllMataKuliah = async (req, res) => {
    try {
        const matakuliah = await Matakuliah.findAll();

        res.status(200).json({
            message: "Mendapatkan semua mata kuliah",
            matakuliah,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAllMataKuliah,
}