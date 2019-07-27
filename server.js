const express = require('express');
const db = require('./models');
const cors = require('cors');
const routes = require('./routes/api/api-routes');

const PORT = process.env.PORT || 3001;
const app = express();

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// set routes
app.use('/api', routes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`API server listening on ${PORT}`);
  });
});
