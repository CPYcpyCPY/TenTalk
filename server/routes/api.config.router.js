let idleRouter = require('./idle')();

module.exports = (app) => {
  app.use('/api', idleRouter);
}