
const express = require('express');
const todoRoutes = require('./route/api/todo'); // import the routes
const axios = require('axios');
const app = express()
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./src/swagger.json');
const cors = require('cors');
// const router = express.Router();
const port = 3000


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.use(express.json());
app.use('/todo', todoRoutes); //to use the routes
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api-docs', swaggerUi.serve);
app.listen(port, () => {
    console.log('Example app listening on port' + port);
})