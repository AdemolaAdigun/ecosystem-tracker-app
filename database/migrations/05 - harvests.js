module.exports = {
  up: async function(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
        'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";',
    );
    await queryInterface.createTable('Harvests', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
      },
      growbedId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'Growbeds',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      pondId: {
        allowNull: true,
        type: Sequelize.UUID,
        references: {
          model: 'Ponds',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      harvestSize: {
        type: Sequelize.INTEGER,
      },
      revenue: {
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
    await queryInterface.dropTable('Harvests');
  }
}
