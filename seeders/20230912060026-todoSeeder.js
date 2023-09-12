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
    return queryInterface.bulkInsert("Todos", [
      {
        title: "Todo 1",
        activity_group_id: 1,
        is_active: true,
        priority: "very-high",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Todo 2",
        activity_group_id: 1,
        is_active: true,
        priority: "very-high",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Todo 3",
        activity_group_id: 3,
        is_active: true,
        priority: "very-high",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Todo 4",
        activity_group_id: 2,
        is_active: true,
        priority: "very-high",
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
    return queryInterface.bulkDelete("Todos", null, {});
  },
};
