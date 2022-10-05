

const express = require('express');
var cors = require('cors')
class Server {
        constructor(){
            this.app = express();
            this.port = process.env.PORT;
            this.usuariosPath = '/api/usuarios';

            this.middlewares();
            this.routes();
        }

        routes(){
            this.app.use(this.usuariosPath, require('../routes/usuarios'));
        }

        middlewares(){
            this.app.use( express.static('public') );

            this.app.use( express.json() );

            this.app.use(cors());
        }

        listen(){
            this.app.listen(this.port, () => {
                console.log('puerto corriendo en', this.port)
            })
        }
}

module.exports = Server;