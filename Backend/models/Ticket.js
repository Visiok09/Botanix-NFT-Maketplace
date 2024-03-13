const { model, Schema } = require('mongoose');

const ticketSchema = new Schema({
  email: String,
  subject: String,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = model('SupportTicket', ticketSchema);
