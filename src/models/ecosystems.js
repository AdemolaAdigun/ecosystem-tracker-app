module.exports = (sequelize, DataTypes) => {
    const ecosystems = sequelize.define('Ecosystems', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        },
        location: DataTypes.STRING,
        address: DataTypes.STRING,
        postcode: DataTypes.STRING,
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {});

    ecosystems.associate = function (models) {
        ecosystems.hasOne(models.Growbeds, {
            foreignKey: { name: 'ecosystemId' },
        });
        ecosystems.hasOne(models.Ponds, {
            foreignKey: { name: 'ecosystemId' },
        });
    };

    return ecosystems;
};
