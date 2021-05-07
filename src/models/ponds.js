module.exports = (sequelize, DataTypes) => {
    const ponds = sequelize.define('Ponds', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        temperature: DataTypes.FLOAT,
        pH: DataTypes.FLOAT,
        water_level: DataTypes.FLOAT,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {});

    ponds.associate = (models) => {
        ponds.belongsTo(models.Ecosystems, {
            foreignKey: { name: 'ecosystemId' },
        });
        ponds.hasMany(models.Harvests, {
            foreignKey: { name: 'pondId' },
        });
    };

    return ponds;
};
