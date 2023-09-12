"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Activities", [
      {
        title: "Activity 1",
        email: "test@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Activity 2",
        email: "sef@dssda.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Activity 3",
        email: "mamdas@adasmd.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Activity 1",
        email: "test@test.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Activity 2",
        email: "sef@dssda.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Activity 3",
        email: "mamdas@adasmd.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Activities", null, {});
  },
};
