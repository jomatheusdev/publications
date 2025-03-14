require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./modules/user/routes/UserRoute');
const postRoutes = require('./modules/post/routes/PostRoute');
const likeRoutes = require('./modules/like/routes/LikeRoute'); // Adicione esta linha
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./config/swagger');
const setupGraphQL = require('./config/graphqlSetup'); // Adicione esta linha
const setupSequelize = require('./config/sequelizeSetup'); // Adicione esta linha

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/likes', likeRoutes); // Adicione esta linha
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

setupGraphQL(app); // Adicione esta linha
setupSequelize(app, port); // Adicione esta linha
