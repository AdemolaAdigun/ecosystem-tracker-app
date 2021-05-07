module.exports = (sequelize, DataTypes) => {
    const harvests = sequelize.define('Harvests', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        harvestSize: DataTypes.INTEGER,
        revenue: DataTypes.FLOAT,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {});

    harvests.associate = (models) => {
        harvests.belongsTo(models.Growbeds, {
            foreignKey: { name: 'growbedId' },
        });
        harvests.belongsTo(models.Ponds, {
            foreignKey: { name: 'pondId' },
        });
    };

    return harvests;
};
