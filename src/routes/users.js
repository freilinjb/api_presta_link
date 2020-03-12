const express = require('express');
const router = express.Router();
const controller = require('../controllers/clientes')

const mysqlConnection  = require('../database/index');

router.get('/', (req,res) => {
    mysqlConnection.query('SELECT * FROM Persona;', (err, rows,fields) => {
        if(!err){
            res.json(rows);
        }
        else{
            res.json({
                mensaje : err
            });
        }
        
    });
});
router.get('/Cliente', controller.list);

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

router.get('/Cliente/:id', controller.edit);


// router.get('/', (req,res) =>{
//     res.send('hola  mundo');
// })


module.exports = router;