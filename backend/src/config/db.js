require('dotenv').config();
const { drizzle } = require('drizzle-orm/mysql2');
const mysql = require('mysql2/promise');

// Create connection pool
const poolConnection = mysql.createPool({
    uri: process.env.DATABASE_URL
});

// Initialize Drizzle instance
const db = drizzle(poolConnection);

module.exports = { db, poolConnection };
