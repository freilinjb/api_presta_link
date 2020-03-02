const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database/index');

router.get('/', (req,res) => {
    mysqlConnection.query('SELECT * FROM Tercero;', (err, rows,fields) => {
        try{
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

// router.get('/', (req,res) =>{
//     res.send('hola  mundo');
// })


module.exports = router;