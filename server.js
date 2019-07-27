//initialize modules
const express = require('express');
const db = require('./models');
const cors = require('cors');
const routes = require('./routes');
const app = express();

//set server port
const PORT = process.env.PORT || 3001;

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//enable static assets from build for deployment
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// set route
app.use(routes);

//sync with db and start server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API server listening on ${PORT}`);
  });
});
