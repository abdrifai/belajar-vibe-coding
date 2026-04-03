const userService = require('../service/user.service');

class UserController {
    async getUsers(req, res, next) {
        try {
            // Note: Since DB is just configured with placeholder credentials, it might throw an error.
            // But this completes the structural scaffolding.
            const users = await userService.getAllUsers();
            res.status(200).json({ data: users });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
