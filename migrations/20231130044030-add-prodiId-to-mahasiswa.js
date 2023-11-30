'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    queryInterface.addColumn('Mahasiswas', 'prodiId', Sequelize.INTEGER);
    queryInterface.addConstraint('Mahasiswas', {
        fields: ['prodiId'],
        type: 'foreign key',
        name: 'prodiId_mahasiswa_fk',
        references: {
            table: 'Prodis',
            field: 'id'
        }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    
    await queryInterface.removeConstraint('Mahasiswas', 'prodiId_mahasiswa_fk')
    await queryInterface.removeColumn('Mahasiswas', 'prodiId')
  }
};
