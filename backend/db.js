//const { Sequelize } = require('sequelize');

//const sequelize = new Sequelize('your_db_name', 'your_username', 'your_password', {
//  host: 'your-aws-endpoint.amazonaws.com',
//  dialect: 'mysql',
//});

//module.exports = sequelize;
DB_HOST='db-class-instance.csjyam0mi670.us-east-1.rds.amazonaws.com'
DB_USER='admin'
DB_PASSWORD='password'
DB_NAME='db-class-instance'

const mysql = require("mysql");

//async function initializeConnection() {
//  try{
var connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
    
  console.log('Connected to database.');
});
//    const connection = await mysql.createConnection(connectionConfig);
//    console.log('Connected to ${connectionConfig.database} database');

//    return connection;
//  } catch(err) {
//    console.error("Error connecting to database: ", err);
//    throw err;
//  }
//}
connection.end

module.exports = {initializeConnection}
