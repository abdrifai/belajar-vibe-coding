const userRepository = require('../repository/user.repository');

class UserService {
    async getAllUsers() {
        return await userRepository.findAll();
    }
}

module.exports = new UserService();
