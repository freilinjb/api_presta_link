const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.json());

//Routes
app.use(require('./routes/users'));
app.use('/users',require('./routes/users'));


//middlewares
app.use(morgan('dev'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});   