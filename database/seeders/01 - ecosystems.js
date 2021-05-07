import { v4 as uuidv4 } from 'uuid';

require('dotenv').config();

export default {
    up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Ecosystems', [
        {
            id: uuidv4(),
            location: 'Tokyo',
            address: 'jim po 2333',
            postcode: '7214HH',
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    ], {}),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete(
        'Ecosystems',
        null,
        {},
    ),
};
