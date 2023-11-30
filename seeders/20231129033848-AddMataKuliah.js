'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Matakuliahs', [
        {
            id: 1,
            nama: 'Pemrograman Dasar',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 2,
            nama: 'Pemrograman Lanjut',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 3,
            nama: 'Algoritma dan Struktur Data',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 4,
            nama: 'Sistem Basis Data',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 5,
            nama: 'Jaringan Komputer Dasar',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Matakuliahs')
  }
};
