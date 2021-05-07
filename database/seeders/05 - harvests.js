import {v4 as uuidv4} from 'uuid';

require('dotenv').config();

export default {
    up: async (queryInterface, Sequelize) => {
        const growbedId = await queryInterface.rawSelect('Growbeds', {}, ['id']);
        const pondId = await queryInterface.rawSelect('Ponds', {}, ['id']);
        return queryInterface.bulkInsert('Harvests', [
            {
                id: uuidv4(),
                growbedId,
                harvestSize: 30000,
                revenue: 45043,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                pondId,
                harvestSize: 320000,
                revenue: 245043,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                growbedId,
                harvestSize: 42000,
                revenue: 50000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                pondId,
                harvestSize: 321500,
                revenue: 200011,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                growbedId,
                harvestSize: 37055,
                revenue: 43022,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                pondId,
                harvestSize: 311900,
                revenue: 250000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                growbedId,
                harvestSize: 40000,
                revenue: 30500,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                pondId,
                harvestSize: 200000,
                revenue: 240555,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                growbedId,
                harvestSize: 38055,
                revenue: 22022,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: uuidv4(),
                pondId,
                harvestSize: 299500,
                revenue: 350000,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Harvests', null, {},),
};
