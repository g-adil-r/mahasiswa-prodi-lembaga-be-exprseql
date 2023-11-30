const { default: RouteGroup } = require('express-route-grouping');
const router = require('express').Router()
const root = new RouteGroup('/', router)

const mahasiswaController = require("../controller/mahasiswa.controller")
const prodiController = require("../controller/prodi.controller")
const matakuliahController = require("../controller/matakuliah.controller")

root.group("/mahasiswa", mahasiswa => {
    mahasiswa.get("/", mahasiswaController.getAllMahasiswa);
    mahasiswa.get("/:nim", mahasiswaController.getMahasiswaByNim);

    mahasiswa.group("/:nim/matakuliah", matakuliah => {
        matakuliah.post("/", mahasiswaController.addMataKuliah);
        matakuliah.put("/", mahasiswaController.removeMataKuliah);
    })
})

router.get("/prodi", prodiController.getAllProdi)
router.get("/matakuliah", matakuliahController.getAllMataKuliah)

module.exports = root;