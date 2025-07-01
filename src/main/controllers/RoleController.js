import RoleService from "../services/RoleService.js";

class RoleController {
    async getRoleById(req, res) {
        try {
            const role = await RoleService.getByIdRole(req.params.id);
            res.json(role);
        }catch (error) {
            res.status(500).json({ error: 'Failed to fetch posts', details: error.message });
        }
    }
    async getAllRoles(req, res) {
        try {
            const roles = await RoleService.getAllRoles();
            res.json(roles);
        }catch (error) {
            res.status(500).json({ error: 'Failed to fetch posts', details: error.message });
        }
    }
    async createRole(req, res) {
        try {
            const role = await RoleService.createdRole(req.body);
            res.json(role);
        }catch (error) {
            res.status(500).json({error: 'Failed to fetch posts', details: error.message});
        }
    }
    async updateRole(req, res) {
        try {
            const role = await RoleService.updatedRole(req.params.id, req.body);
            res.json(role);
        }catch (error) {
            res.status(500).json({error: 'Failed to fetch posts', details: error.message});
        }
    }
    async deleteRole(req, res) {
        try {
            const role = await RoleService.deletedRole(req.params.id);
            res.json({mesage: 'Role deleted successfully.'});
        }catch (error) {
            res.status(500).json({error: 'Failed to fetch posts', details: error.message});
        }
    }

}

export default new RoleController();