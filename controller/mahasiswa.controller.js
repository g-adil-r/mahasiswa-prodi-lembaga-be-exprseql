const { 
    Mahasiswa,
    Matakuliah
} = require('../models')

const getAllMahasiswa = async (req, res) => {
    try {
        console.log(Mahasiswa)
        const mahasiswa = await Mahasiswa.findAll();

        return res.status(200).json({
            message: "Mendapatkan semua mahasiswa",
            mahasiswa,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const getMahasiswaByToken = async (req, res) => {
    return res.status(200).json({
        mahasiswa: req.mahasiswa,
    });
}

const getMahasiswaByNim = async (req, res) => {
    const nim = req.params.nim;

    try {
        const mahasiswa = await Mahasiswa.findByPk(nim)

        if (!mahasiswa) {
            return res.status(404).json({
                message: "Mahasiswa dengan NIM "+nim+" tidak ditemukan",
            })
        }

        return res.status(200).json({
            message: "Mendapatkan mahasiswa dari nim"+nim,
            mahasiswa,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const addMataKuliah = async (req, res) => {
    const nim = req.params.nim;
    const mkid = req.params.mkid;

    try {
        const mahasiswa = await Mahasiswa.findByPk(nim)
        const matakuliah = await Matakuliah.findByPk(nim)

        if (!mahasiswa) {
            return res.status(404).json({
                message: "Mahasiswa dengan NIM "+nim+" tidak ditemukan",
            })
        }
        if (!matakuliah) {
            return res.status(404).json({
                message: "Mata kuliah dengan ID "+mkid+" tidak ditemukan",
            })
        }

        await Mahasiswa.addMataKuliah(matakuliah)

        return res.status(200).json({
            message: "Menambah matakuliah dari mahasiswa"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const removeMataKuliah = async (req, res) => {
    const nim = req.params.nim;
    const mkid = req.params.mkid;

    try {
        const mahasiswa = await Mahasiswa.findByPk(nim)
        const matakuliah = await Matakuliah.findByPk(nim)

        if (!mahasiswa) {
            return res.status(404).json({
                message: "Mahasiswa dengan NIM "+nim+" tidak ditemukan",
            })
        }
        if (!matakuliah) {
            return res.status(404).json({
                message: "Mata kuliah dengan ID "+mkid+" tidak ditemukan",
            })
        }

        await Mahasiswa.removeMataKuliah(matakuliah)

        return res.status(200).json({
            message: "Menghapus matakuliah dari mahasiswa"
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    getAllMahasiswa,
    getMahasiswaByToken,
    getMahasiswaByNim,
    addMataKuliah,
    removeMataKuliah,
}