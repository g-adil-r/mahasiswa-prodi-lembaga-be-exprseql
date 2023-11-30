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
            nama: 'Teknologi Informasi',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            nama: 'Sistem Informasi',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            nama: 'Pendidikan Teknologi Informasi',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
            nama: 'Teknik Informatika',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        {
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
