module.exports = {
  up: async function(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
        'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
    );
    await queryInterface.createTable('Growbeds', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      ecosystemId: {
        allowNull: false,
        type: Sequelize.UUID,
        references: {
          model: 'Ecosystems',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      lightIntensity: {
        type: Sequelize.INTEGER,
      },
      humidity: {
        type: Sequelize.INTEGER,
      },
      pH: {
        type: Sequelize.INTEGER,
      },
      water_level: {
        type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Growbeds');
  }
}
