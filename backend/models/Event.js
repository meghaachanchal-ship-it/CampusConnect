const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Event title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  category: {
    type: String,
    enum: ['Technical', 'Cultural', 'Workshop', 'Sports', 'Seminar'],
    default: 'Technical'
  },
  date: {
    type: Date,
    required: [true, 'Event date is required']
  },
  venue: {
    type: String,
    required: [true, 'Venue is required']
  },
  organizer: {
    type: String,
    required: [true, 'Organizer club/dept is required']
  },
  capacity: {
    type: Number,
    required: [true, 'Capacity is required'],
    default: 50
  },
  registeredCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Event', eventSchema);