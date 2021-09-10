const express = require('express');
const http = require('http');
const cors = require('cors');
const routes = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

(async () => {
    const database = require('./src/configs/db');

    try {
        const result = await database.sync({ force: true });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.listen(3333);