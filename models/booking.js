// Define table model for bookings using Sequelize ORM
module.exports = function(sequelize, DataTypes) {
  let Booking = sequelize.define('Booking', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    appt_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    appt_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    appt_time: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Booking;
};
