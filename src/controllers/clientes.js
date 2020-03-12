const mysqlConnection  = require('../database/index');
const controller  = {};

// controller.list = (req, res) => {

//     console.log('Prueba de QUERY Cliente');
    
//     mysqlConnection.query('SELECT * FROM Cliente', (err, rows, fields) => {
//         if(!err){
//             res.statusCode = 200;
//             res.json(rows);
//         }
//         else{
//             console.log(err);   
//         }
//     });
// }

controller.list = (req, res) => {
    console.log('Funcion Cliente');
    
    mysqlConnection.query('SELECT * FROM Cliente;', (err, rows, fields) => {
        if(!err) {
            res.statusCode = 200;
            res.json(rows);
            
        }
        else {
            console.log(err);
        }
    });
  };
  

controller.edit = (req, res) => {
    const { id } = req.params;  
    console.log('Funcion Cliente');
    
    mysqlConnection.query('SELECT * FROM Cliente WHERE IdCliente  = ?', [id], (err, rows, fields) => {
        if(!err) {
            res.statusCode = 200;
            res.json(rows);

            console.log(rows);
            console.log(fields);
        }
        else {
            console.log(err);
        }
    });
  };

module.exports = controller;