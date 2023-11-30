const { Prodi } = require('../models')

const getAllProdi = async (req, res) => {
    try {
        const prodi = await Prodi.findAll();

        res.status(200).json({
            message: "Mendapatkan semua prodi",
            prodi,
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAllProdi,
}