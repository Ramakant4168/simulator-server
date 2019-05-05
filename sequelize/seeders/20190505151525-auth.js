module.exports = {
  up: (queryInterface) =>
    (queryInterface.bulkInsert('auth', [{
        user_name: "test",
        user_password: "test123",
        user_token: "testTokendsdnjknknkjnkkjnkjns wmnmnwenadcnxcmdmwnd",
        created_at: new Date(),
        updated_at: new Date(),
      }
    ])),
  down: (queryInterface) =>
    (queryInterface.bulkDelete('auth', null, {})),
};