'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = hashSync("fifa1Ab_", 10);
    await queryInterface.bulkInsert('users', [
      {
        full_name: "Juan Perez",
        email: 'juan@example.com',
        password: hashedPassword,
        created_at: new Date,
        updated_at: new Date
      },
      {
        full_name: "Jose Mendez",
        email: 'jose@example.com',
        password: hashedPassword,
        created_at: new Date,
        updated_at: new Date
      },
      {
        full_name: "Jimena Lopez",
        email: 'jimena@example.com',
        password: hashedPassword,
        created_at: new Date,
        updated_at: new Date
      }]
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
