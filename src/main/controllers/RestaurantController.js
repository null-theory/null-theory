import RestaurantService from "../services/RestaurantService.js";

class RestaurantController{
    async createRestaurant(req, res){
        try {
            const restaurant = await RestaurantService.create(req.body);
            res.status(201).json(restaurant);
        }catch (err){
            res.status(500).json({ error: 'Failed to create restaurant', details: err.message });
        }
    }
    async getAllRestaurants(req, res){
        try {
            const restaurants = await RestaurantService.getAllRestaurants();
            res.json(restaurants);
        }catch(err){
            res.status(500).json({ error: 'Failed to fetch restaurants', details: err.message });
        }
    }
    async updateRestaurant(req, res){
        try {
            const restaurant = await RestaurantService.updateRestaurant(req.params.id, req.body);
            res.json(restaurant);
        }catch(err){
            res.status(500).json({ error: 'Failed to update restaurant', details: err.message });
        }
    }
    async deleteRestaurant(req, res){
        try {
            const restaurant = await RestaurantService.deleteRestaurant(req.params.id);
            res.json({message: 'Restaurant deleted'});
        }catch (err){
            res.status(500).json({ error: 'Failed to delete restaurant', details: err.message });
        }
    }
    async getRestaurant(req, res){
        try {
            const restaurant = await RestaurantService.getById(req.params.id);
            res.json(restaurant);
        }catch(err){
            res.status(500).json({ error: 'Failed to get restaurant', details: err.message });
        }
    }
}

export default new RestaurantController();