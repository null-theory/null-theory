import MenuService from "../services/MenuService.js";

class MenuController{
    async deleteFood(req, res){
        try {
            const menu = await MenuService.deletedMenu(req.params.id);
            res.json({message: 'Menu deleted'});
        }catch (err){
            return res.status(500).send({message: 'Error deleting menu'});
        }
    }
    async listMenu(req, res){
        try {
            const menu = await MenuService.getAllMenu()
            res.json(menu);
        }catch (err){
            return res.status(500).send({message: 'Error deleting menu'});
        }
    }
    async createFood(req, res){
        try {
            const menu = await MenuService.createdMenu(req.body);
            res.json(menu);
        }catch (err){
            return res.status(500).send({message: 'Error deleting menu'});
        }
    }
    async updateFood(req, res){
        try {
            const menu = MenuService.updatedMenu(req.params.id, req.body);
            res.json(menu);
        }catch (err){
            return res.status(500).send({message: 'Error deleting menu'});
        }
    }
    async getFoodById(req, res){
        try {
            const menu = await MenuService.getMenuById(req.params.id);
            res.json(menu);
        }catch (err){
            return res.status(500).send({message: 'Error deleting menu'});
        }
    }
}

export default new MenuController();