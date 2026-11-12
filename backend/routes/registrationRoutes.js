const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const Event = require('../models/Event');

// 1. REGISTER STUDENT FOR AN EVENT (Atomic seat count + Duplicate Prevention)
router.post('/', async (req, res) => {
  try {
    const { eventId, studentName, rollNo, email, department } = req.body;

    // Validation
    if (!eventId || !studentName || !rollNo || !email) {
      return res.status(400).json({ success: false, message: 'Please provide all student details' });
    }

    // Check if event exists
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }

    // Check capacity
    if (event.registeredCount >= event.capacity) {
      return res.status(400).json({ success: false, message: 'Sorry, this event is already Housefull!' });
    }

    // Check duplicate registration
    const existingRegistration = await Registration.findOne({ eventId, rollNo });
    if (existingRegistration) {
      return res.status(400).json({ success: false, message: 'You have already registered for this event!' });
    }

    // Save registration in MongoDB
    const registration = await Registration.create({
      eventId,
      studentName,
      rollNo,
      email,
      department: department || 'CSE'
    });

    // Atomic update: event ki registered seats ko 1 badha do
    event.registeredCount += 1;
    await event.save();

    res.status(201).json({
      success: true,
      message: 'Registration successful! Your seat is confirmed.',
      registrationId: registration._id,
      data: registration
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 2. GET ALL REGISTRATIONS (Admin Roster ke liye)
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find().populate('eventId', 'title date venue');
    res.status(200).json({ success: true, count: registrations.length, data: registrations });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;