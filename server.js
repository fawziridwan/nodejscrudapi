const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({
    extended:true
}));

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send("Index");
});

// employee routes
const emplRoutes = require('./src/routes/employee.routes')

// using routes employee
app.use('/api/v1/employees', emplRoutes) 

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});