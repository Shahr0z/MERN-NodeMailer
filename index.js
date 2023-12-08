const express = require('express');
const dotEnv = require('dotenv');
const bodyParser = require('body-parser');
const Routes = require('./routes');

dotEnv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

//http://localhost:8000/email
