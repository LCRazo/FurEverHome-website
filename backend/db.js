const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('your_db_name', 'your_username', 'your_password', {
  host: 'your-aws-endpoint.amazonaws.com',
  dialect: 'mysql',
});

module.exports = sequelize;