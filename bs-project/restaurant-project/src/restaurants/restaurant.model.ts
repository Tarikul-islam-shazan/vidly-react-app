import mongoose from 'mongoose';
import Restaurant from './restaurant.interface';

const restaurantSchema = new mongoose.Schema({
    id: Number,
    name: String,
    location: String
});

const restaurantModel = mongoose.model<Restaurant & mongoose.Document>('Restaurant',restaurantSchema);

export default restaurantModel;