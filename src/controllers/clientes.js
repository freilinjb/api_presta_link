const mysqlConnection  = require('../database/index');
const controller  = {};

controller.list = (req, res) => {
    mysqlConnection.query('SELECT * FROM Cliente', (err, rows, fields)) 
}

module.exports = controller;