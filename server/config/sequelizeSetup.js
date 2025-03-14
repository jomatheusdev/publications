const sequelize = require('./db');
const setupAssociations = require('./associations');

const setupSequelize = (app, port) => {
  setupAssociations();
  sequelize.sync({ alter: true })
    .then(() => {
      app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
        console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
      });
    })
    .catch(err => console.error('Unable to sync database:', err));
};

module.exports = setupSequelize;
