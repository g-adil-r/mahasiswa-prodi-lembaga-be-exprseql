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
    await queryInterface.createTable('mahasiswa_matakuliah', {
        mhsNim: {
            type: Sequelize.STRING,
            references: {
                model: 'Mahasiswas',
                key: 'nim',
            }
        },
        mkId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'Matakuliahs',
                key: 'id',
            }
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE
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

    await queryInterface.dropTable('mahasiswa_matakuliah');
  }
};
