const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// 1. GET ALL EVENTS: Database se saare events fetch karna
router.get('/', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json({ success: true, count: events.length, data: events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 2. GET SINGLE EVENT: Ek specific event ki details nikalna
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ success: false, message: 'Event not found' });
    }
    res.status(200).json({ success: true, data: event });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 3. CREATE NEW EVENT: Admin ka banaya hua naya event MongoDB me save karna
router.post('/', async (req, res) => {
  try {
    const { title, description, category, date, venue, organizer, capacity } = req.body;

    if (!title || !description || !date || !venue || !capacity) {
      return res.status(400).json({ success: false, message: 'Please fill all required fields' });
    }

    const newEvent = await Event.create({
      title,
      description,
      category,
      date,
      venue,
      organizer: organizer || 'Campus Club',
      capacity: Number(capacity),
      registeredCount: 0,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60'
    });

    res.status(201).json({ success: true, message: 'Event created successfully!', data: newEvent });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;