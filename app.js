require('dotenv').config();
const Server = require('./servers/server');


const server=new Server();
server.listen();