const express = require('express');
const cors = require('cors');
const MongoClint = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
require('dotenv').config();
const port = 4000;

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) =>{
    res.send('this is hse project server');
});

app.listen(port, () => {
    console.log(`hse_proj listening at http://localhost:${port}`)
})