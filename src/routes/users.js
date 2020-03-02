const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../database/index');

router.get('/', (req,res) => {
    mysqlConnection.query('SELECT * FROM Persona', (err, rows,fields) => {
        try{

        }catch(error){
            if(!err){
                res.json(rows);
            }
            else {
                console.log(err);
                console.log(error);
            }
        }
    });
});


module.exports = router;