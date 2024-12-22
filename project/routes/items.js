const express = require('express');
const { items, lists } = require('../db');
const Item = require('../models/itemModel');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();

// Get all items in a list
router.get('/:listId', (req, res) => {
  const list = lists.find((l) => l.id === req.params.listId);
  if (!list) return res.status(404).json({ message: 'List not found' });

  const listItems = items.filter((item) => list.items.includes(item.id));
  res.json(listItems);
});

// Create a new item in a list
router.post('/:listId', (req, res) => {
  const list = lists.find((l) => l.id === req.params.listId);
  if (!list) return res.status(404).json({ message: 'List not found' });

  const { name, rating, difficulty, type, favorite, note, time } = req.body;
  const newItem = new Item(uuidv4(), name, rating, difficulty, type, favorite, note, time);
  items.push(newItem);
  list.items.push(newItem.id);

  res.status(201).json(newItem);
});

// Delete an item
router.delete('/:listId/:itemId', (req, res) => {
  const { listId, itemId } = req.params;

  const list = lists.find((l) => l.id === listId);
  if (!list) return res.status(404).json({ message: 'List not found' });

  const itemIndex = items.findIndex((item) => item.id === itemId);
  if (itemIndex === -1) return res.status(404).json({ message: 'Item not found' });

  list.items = list.items.filter((id) => id !== itemId);
  items.splice(itemIndex, 1);

  res.status(204).send();
});

module.exports = router;
