const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample data to work with
let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' }
];

// GET request - Read all items
app.get('/items', (req, res) => {
  res.json(items);
});

// POST request - Create a new item
app.post('/items', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length ? items[items.length - 1].id + 1 : 1;
  items.push(newItem);
  res.status(201).json(newItem);
});

// PUT request - Update an item
app.put('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedItem = req.body;
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    items[index] = { id, ...updatedItem };
    res.json(items[index]);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// DELETE request - Delete an item
app.delete('/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = items.findIndex(item => item.id === id);
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    res.json(deletedItem);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
