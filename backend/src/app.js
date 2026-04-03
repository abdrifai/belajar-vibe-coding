const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const userRoutes = require('./modules/user/routes/user.routes');
// const authRoutes = require('./modules/auth/routes/auth.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Backend API',
      version: '1.0.0',
      description: 'API Documentation for Belajar Vibe Coding',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/modules/**/routes/*.js'], // Scan route files for Swagger annotations
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Base route for healthcheck
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API' });
})

// Module Routes
app.use('/api/users', userRoutes);
// app.use('/api/auth', authRoutes);

// Fallback & Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

module.exports = app;
