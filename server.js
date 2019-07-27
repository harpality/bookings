const express = require('express');
const db = require('./models');

const PORT = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`listening on ${PORT}`);
  });
});
