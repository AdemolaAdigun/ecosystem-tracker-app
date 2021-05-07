import { v4 as uuidv4 } from 'uuid';

export default {
    up: async (queryInterface, Sequelize) => {
        const ecosystemId = await queryInterface.rawSelect('Ecosystems', { where: { location: 'Tokyo' } }, ['id']);
        return queryInterface.bulkInsert('Ponds', [
            {
                id: uuidv4(),
                temperature: 88.3,
                pH: 9.9,
                water_level: 50.5,
                ecosystemId,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Ponds', {}),
};
