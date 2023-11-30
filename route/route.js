const { default: RouteGroup } = require('express-route-grouping');
const router = require('express').Router()
const root = new RouteGroup('/', router)

const { JWTMiddleware } = require('../middleware/jwt.middleware')

const authController = require("../controller/auth.controller")
const mahasiswaController = require("../controller/mahasiswa.controller")
const prodiController = require("../controller/prodi.controller")
const matakuliahController = require("../controller/matakuliah.controller")

root.group("/auth", auth => {
    auth.post("/register", authController.register);
    auth.post("/login", authController.login);
})

root.group("/mahasiswa", mahasiswa => {
    mahasiswa.get("/", mahasiswaController.getAllMahasiswa);
    mahasiswa.get("/profile", JWTMiddleware, mahasiswaController.getMahasiswaByToken)
    mahasiswa.get("/:nim", mahasiswaController.getMahasiswaByNim);

    mahasiswa.group("/:nim/matakuliah", matakuliah => {
        matakuliah.post("/", mahasiswaController.addMataKuliah);
        matakuliah.put("/", mahasiswaController.removeMataKuliah);
    })
})

router.get("/prodi", prodiController.getAllProdi)
router.get("/matakuliah", matakuliahController.getAllMataKuliah)

module.exports = root;