const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // ruta del edpoint
        this.usuarioPath = '/api/usuario';

        //middleware direccionamiento a pagina estatica
        this.middlewares();

        //llamado a rutas
        this.routes();

        //llamado al escucha
        //this.listen();
    }

    middlewares() {
        // uso de cors
        this.app.use(cors());
        // lectura(texto) y parsea del body a un archivo json
        this.app.use(express.json());
        // direccionamiento a la página principal
        this.app.use(express.static('public'));
    }

    routes() {
        this.app.use(this.usuarioPath, require('../routes/usuarios.route'));
    }

    listen() {
        this.app.listen(this.port, () => console.log(`escuchando en el puerto ${this.port}`));
    }

}

module.exports = Server;