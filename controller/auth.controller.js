const db = require('../models')
const Mahasiswa = db.Mahasiswa
const Bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

const register = async (req, res) => {
    try {
        // console.log(Object.keys(Mahasiswa.prototype))
        const t = await db.sequelize.transaction()

        const mahasiswa = await Mahasiswa.create({
            nim: req.body.nim,
            nama: req.body.nama,
            angkatan: req.body.angkatan,
            password: Bcrypt.hashSync(req.body.password, 10),
        }, {transaction: t});

        await mahasiswa.setProdi(req.body.prodiId, {transaction: t})

        await t.commit();

        return res.status(200).json({
            message: "Registrasi mahasiswa",
            mahasiswa,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

const login = async (req, res) => {
    const nim = req.body.nim

    try {
        const mahasiswa = await Mahasiswa.findByPk(nim);

        if (!mahasiswa) {
            return res.status(404).json({
                message: "Mahasiswa tidak ditemukan"
            })
        }

        const token = JWT.sign({
            iss: 'jsonwebtoken',
            sub: nim,
            iat: Date.now(),
            exp: Date.now() + 3600
        }, process.env.JWT_SECRET, {
            algorithm: "HS256"
        })

        await mahasiswa.update({
            token: token
        })

        return res.status(200).json({
            message: "Login mahasiswa",
            token: token,
        })
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

module.exports = {
    register,
    login,
}