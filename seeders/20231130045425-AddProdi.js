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
    await queryInterface.bulkInsert('Prodis', [
        {
            id: 1,
            nama: 'Teknologi Informasi',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 2,
            nama: 'Sistem Informasi',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 3,
            nama: 'Pendidikan Teknologi Informasi',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 4,
            nama: 'Teknik Informatika',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            id: 5,
            nama: 'Teknik Komputer',
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
    await queryInterface.bulkDelete('Prodis');
  }
};
