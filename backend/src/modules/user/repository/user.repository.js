const { eq } = require('drizzle-orm');
const { db } = require('../../../config/db');
const { users } = require('../model/user.schema');

class UserRepository {
    async findAll() {
        return await db.select().from(users);
    }
    
    async findById(id) {
        const result = await db.select().from(users).where(eq(users.id, id));
        return result[0] || null;
    }
}

module.exports = new UserRepository();
