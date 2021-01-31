import 'dotenv/config';
import App from './app';
import RestaurantController  from './restaurants/restaurant.controller'
import validateEnv from './utils/validateEnv';

validateEnv();

const app = new App(
    [
        new RestaurantController(),
    ],
    5000
);

app.listen();