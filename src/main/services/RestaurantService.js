import Restaurant from "../models/restaurant.js";

class RestaurantService{
    async create(restaurant){
        const createdRestaurant = await Restaurant.create(restaurant);
        return createdRestaurant;
    }
    async updateRestaurant(id, restaurantData){
        const { name, address, isActive, createdAt } = restaurantData;
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(
            id,
            { name, address, isActive, createdAt },
            { new: true, runValidators: true }
        );
        if (!updatedRestaurant) {
            throw new Error('Restaurant not found');
        }
        return updatedRestaurant;
    }
    async deleteRestaurant(id) {
        const restaurant = await Restaurant.findByIdAndDelete(id);
        if (!restaurant) {
            throw new Error('Restaurant not found');
        }
        return restaurant;
    }
    async getAllRestaurants() {
        const restaurants = await Restaurant.find();
        return restaurants;
    }
    async getById(id) {
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            throw new Error('Restaurant not found');
        }
        return restaurant;
    }
}

export default new RestaurantService();