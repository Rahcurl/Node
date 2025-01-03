//npm init --> makes object notation file i.e JSON
//to run --> node file name eg,(node index.js)
//to run express module --> npm i express

const express = require('express');
const app = express();
const port = 4000;
//for url i.e /
app.get('/', (req, res) => res.send("Root Endpoint!"));
//for url i.e /uni
app.get('/uni', (req, res) => res.send("Uni Endpoint!"));
//for url i.e /uni/school
 app.get('/uni/school', (req, res) => res.json({name: "School"}));
app.listen(port, () => console.log(`Example double / port ${port}!`));