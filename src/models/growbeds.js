module.exports = (sequelize, DataTypes) => {
    const growbeds = sequelize.define('Growbeds', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        lightIntensity: DataTypes.FLOAT,
        humidity: DataTypes.FLOAT,
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

    growbeds.associate = (models) => {
        growbeds.belongsTo(models.Ecosystems, {
            foreignKey: { name: 'ecosystemId' },
        });
        growbeds.hasMany(models.Harvests, {
            foreignKey: { name: 'growbedId' },
        });
    };

    return growbeds;
};
