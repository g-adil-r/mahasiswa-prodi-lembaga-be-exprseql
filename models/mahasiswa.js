'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mahasiswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Prodi, {
        as: 'prodi'
      });
      this.belongsToMany(models.Matakuliah, {
        through: 'mahasiswa_matakuliah',
        as: 'matakuliah',
        foreignKey: 'mhsNim',
      })
    }
  }
  Mahasiswa.init({
    nim: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    nama: DataTypes.STRING,
    angkatan: DataTypes.INTEGER,
    password: DataTypes.STRING,
    token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Mahasiswa',
  });
  return Mahasiswa;
};