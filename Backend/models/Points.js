const { model, Schema } = require('mongoose');

const pointsSchema = new Schema({
  address: { type: String, unique: true },
  points: { type: Number, default: 0 },
});

module.exports = model('UserPoints', pointsSchema);
