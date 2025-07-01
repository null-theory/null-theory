import Role from '../models/role.js';

class RoleService{
    async getAllRoles(){
        const roles = await Role.find();
        return roles;
    }
    async getByIdRole(id){
        const role = await Role.findById(id);
        return role;
    }
    async deletedRole(id){
        const role = await Role.findByIdAndDelete(id);
        if (!role){
            throw new Error('No role found with id ' + id);
        }
        return role;

    }
    async updatedRole(id, roleData) {
        if (!roleData) {
            throw new Error("roleData is required");
        }
        const { name } = roleData;
        const existing = await Role.findOne({ name, _id: { $ne: id } });
        if (existing) {
            throw new Error("Role name already exists");
        }
        const role = await Role.findByIdAndUpdate(id, { name }, { new: true });
        if (!role) {
            throw new Error("Role not found");
        }
        return role;
    }


    async createdRole(roleData){
        const role = await Role.create(roleData);
        return role;
    }
}

export default new RoleService();