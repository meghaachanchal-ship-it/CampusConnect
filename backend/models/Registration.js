const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true
  },
  studentName: {
    type: String,
    required: [true, 'Student name is required']
  },
  rollNo: {
    type: String,
    required: [true, 'Student UID / Roll Number is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  department: {
    type: String,
    default: 'CSE'
  },
  registrationDate: {
    type: Date,
    default: Date.now
  }
});

// Ek student ek hi event me do baar register na kar sake (Duplicate Prevention)
registrationSchema.index({ eventId: 1, rollNo: 1 }, { unique: true });

module.exports = mongoose.model('Registration', registrationSchema);