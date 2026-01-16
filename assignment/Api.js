const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory storage
let todos = [];
let nextId = 1;

/**
 * CREATE a new TODO
 * POST /todos
 */
app.post('/todos', (req, res) => {
    const { title, completed = false } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const todo = {
        id: nextId++,
        title,
        completed
    };

    todos.push(todo);
    res.status(201).json(todo);
});

/**
 * READ all TODOs
 * GET /todos
 */
app.get('/todos', (req, res) => {
    res.json(todos);
});

/**
 * READ a single TODO by ID
 * GET /todos/:id
 */
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    res.json(todo);
});

/**
 * UPDATE a TODO
 * PUT /todos/:id
 */
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);

    if (!todo) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const { title, completed } = req.body;

    if (title !== undefined) todo.title = title;
    if (completed !== undefined) todo.completed = completed;

    res.json(todo);
});

/**
 * DELETE a TODO
 * DELETE /todos/:id
 */
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Todo not found' });
    }

    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
});

// Start server
app.listen(PORT, () => {
    console.log(`TODO API running on http://localhost:${PORT}`);
});
