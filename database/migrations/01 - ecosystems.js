module.exports = {
  up: async function(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
        'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
    );
    await queryInterface.createTable('Ecosystems', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      location: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      postcode: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
    })
  },

  down: async function(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ecosystems');
  }
}
