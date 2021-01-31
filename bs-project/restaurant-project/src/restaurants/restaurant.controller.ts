import express from 'express';
import Restaurant from './restaurant.interface';
import restaurantModel from './restaurant.model';

class RestaurantController {
    path ='/api/restaurant';
    router = express.Router();
    restaurant = restaurantModel

    constructor(){
        this.router.get(this.path,this.getAllRestaurants);
        this.router.post(this.path, this.createARestaurant);
    }

    getAllRestaurants= (request: express.Request, response: express.Response) => {
        this.restaurant.find()
            .then((restaurant: Restaurant) => {
                response.send(restaurant);
            })
    };
    
    createARestaurant = async (request: express.Request, response: express.Response) => {
        const restaurantPostData: Restaurant = request.body;
        const createdRestauarnt = new this.restaurant(restaurantPostData);
        try{
            const result = await createdRestauarnt.save();
            console.log("data created",request.body);
            response.send(result)
        } catch(e){
            response.send(e)
        }

    };

}

export default RestaurantController;