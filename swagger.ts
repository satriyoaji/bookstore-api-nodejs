import swaggerJSDoc from 'swagger-jsdoc';

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Bookstore API',
      version: '1.0.0',
      description: 'API documentation for Bookstore',
    },
    basePath: '/',
  },
  apis: ['./src/routes/*.ts'], // Path to the API routes
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
