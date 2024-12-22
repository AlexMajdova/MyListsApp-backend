const express = require('express');
const { lists } = require('../db');
const List = require('../models/listModel');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// Get all lists
router.get('/', (req, res) => {
  res.json(lists);
});

// Create a new list
router.post('/', (req, res) => {
  const { name, note } = req.body;
  const newList = new List(uuidv4(), name, note);
  lists.push(newList);
  res.status(201).json(newList);
});

// Get a list by ID
router.get('/:id', (req, res) => {
  const list = lists.find((l) => l.id === req.params.id);
  if (!list) return res.status(404).json({ message: 'List not found' });
  res.json(list);
});

// Delete a list
router.delete('/:id', (req, res) => {
  const index = lists.findIndex((l) => l.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'List not found' });
  lists.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
