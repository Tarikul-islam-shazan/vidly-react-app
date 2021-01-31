import express from 'express';
import * as bodyParser from 'body-parser'
import  mongoose from 'mongoose'
import 'dotenv/config';

class App {

 app: express.Application;
 port: number;

 constructor(controllers: any, port: number) {
    this.app = express();
    this.port = port;
    this.initialization();
    controllers.forEach((controller: any) => {
        this.app.use('/', controller.router);
    });
 }

 initialization() {
    this.app.use(bodyParser.json());
    this.app.use(express.urlencoded({extended: true}));
    this.app.use(express.static('public'));
    this.connetToTheDatabase(); // database connection
 }

 listen() {
     this.app.listen(this.port,() => {
        console.log(`App listening on the port ${this.port}`);
     });
 }

 connetToTheDatabase() {
     const {
        MONGO_USER,
        MONGO_PASSWORD,
        MONGO_PATH,
     } = process.env;
     mongoose.connect(`mongodb://${MONGO_PATH}`,
     {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(()=> console.log('connect to the mongoDb'))
     .catch((err) => console.error('Error occured in db connection: ', err));
 }
}

export default App;