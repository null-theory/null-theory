import Menu from "../models/menu.js";

class MenuService {
    async deletedMenu(id){
        const menu = await Menu.findByIdAndDelete(id);
        if (!menu){
            throw new Error("Menu doesn't exist");
        }
        return menu;
    }
    async getMenuById(id){
        const menu = await Menu.findById(id);
        if(!menu){
            throw new Error("No menu found with id " + id);
        }
        return menu;
    }
    async createdMenu(menuData){
        const menu = await Menu.create(menuData);
        if(!menu){
            throw new Error("Menu does not created");
        }
        return menu;
    }
    async updatedMenu(id, menuData){
        if(!menuData){
            throw new Error("menuData is required");
        }
        const { name, description, price, category, preparationTime, available, popular } = menuData;

        const menu = await Menu.findByIdAndUpdate(
            id,
            { name, description, price, category, preparationTime, available, popular },
            { new: true, runValidators: true });
        if(!menu){
            throw new Error("menuId is required");
        }
        return menu;
    }
    async getAllMenu(){
        const menu = await Menu.find();
        return menu;
    }
}

export default new MenuService();