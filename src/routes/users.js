const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database/index');

router.get('/', (req,res) => {
    mysqlConnection.query('SELECT * FROM Persona;', (err, rows,fields) => {
        try{
            res.statusCode = 200;
            res.json(rows);
        }catch(error){
            if(!err){
                console.log(rows);
                
                
            }
            else {
                console.log(err);
                console.log(error);
            }
        }
    });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    mysqlConnection.query('SELECT * FROM Persona WHERE IdPersona = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows[0]);
        }
        else{
            console.log(err);
        }
    });
});


// router.get('/', (req,res) =>{
//     res.send('hola  mundo');
// })


module.exports = router;