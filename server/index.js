require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./modules/user/routes/UserRoute');
const postRoutes = require('./modules/post/routes/PostRoute');
const likeRoutes = require('./modules/like/routes/LikeRoute'); // Adicione esta linha
const sequelize = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const { graphqlHTTP } = require('express-graphql');
const { mergeSchemas } = require('@graphql-tools/schema');
const userSchema = require('./modules/user/graphql/schema');
const postSchema = require('./modules/post/graphql/schema');
const setupAssociations = require('./config/associations');

const app = express();
const port = 3000;

const swaggerDocs = require('./config/swagger');

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/likes', likeRoutes); // Adicione esta linha
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /graphql:
 *   post:
 *     summary: Executa uma consulta GraphQL
 *     tags: [GraphQL]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               query:
 *                 type: string
 *                 example: "{ users { id username } }"
 *               variables:
 *                 type: object
 *                 example: {}
 *     responses:
 *       200:
 *         description: Resultado da consulta GraphQL
 *       400:
 *         description: Erro na consulta GraphQL
 */
const schema = mergeSchemas({
  schemas: [userSchema, postSchema]
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

setupAssociations(); 
sequelize.sync({ alter: true }) 
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
    });
  })
  .catch(err => console.error('Unable to sync database:', err));
