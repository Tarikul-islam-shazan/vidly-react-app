"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var RestaurantController = /** @class */ (function () {
    function RestaurantController() {
        this.path = '/api/restaurant';
        this.router = express_1.default.Router();
        this.restaurants = [
            {
                id: 1,
                name: "Take OUT",
                location: "Dhanmondi"
            }
        ];
    }
    RestaurantController.prototype.getAllRestaurants = function () {
        var _this = this;
        return this.router.get(this.path, function (request, response) {
            response.send(_this.restaurants);
        });
    };
    RestaurantController.prototype.createARestaurant = function () {
        var _this = this;
        return this.router.post(this.path, function (request, response) {
            var restaurant = request.body;
            _this.restaurants.push(restaurant);
            response.send(restaurant);
        });
    };
    return RestaurantController;
}());
exports.default = RestaurantController;
