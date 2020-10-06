const express = require('express');
const router = express.Router();

// @route  GET api/contacts
// @desc   Get all users contacts
// @access  Private
router.get('/', (req, res) => {
    res.send('Add contact');
});

// @route  POST api/contacts:id
// @desc   update contact
// @access  Private
router.put('/', (req, res) => {
    res.send('Update contacts');
});

// @route  DELETE api/contacts:id
// @desc   Delete contact
// @access  Private
router.delete('/', (req, res) => {
    res.send('Delete contacts');
});

module.exports = router;