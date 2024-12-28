const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todoDB', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.error(err));

//Schema
const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description: String,
    completed: {
        type: Boolean,
        default: false,
    },
});

const Todo = mongoose.model('Todo', todoSchema);

//Routes
app.post('/todos', async (req, res) => {
    try{
        const todo = new Todo(req.body);
        await todo.save();
        res.status(201).json(todo);
    }catch (error) {
        res.status(400).json({message : error.message});
    }
});

app.get('/todos', async (req, res) => {
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
});

app.put('/todos/:id', async (req, res) => {
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if(!todo) return res.status(404).json({ message : 'To-Do not found'});
        res.status(200).json(todo);
    } catch (error){
        res.status(400).json({message : error.message});
    }
});

app.delete('/todos/:id', async (req, res) => {
    try{
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if(!todo) return res.status(404).json({ message : 'To-Do not found'});
        res.status(200).json({ message : 'To-Do deleted successfully'});
    } catch (error) {
        res.status(500).json({message : error.message });
    }
});

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));