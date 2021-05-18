const express = require("express");
const app = express();
const port = 3000;
app.use(express.json())

const todos = [{ todo: "wake up", isCompleted: false }, { todo: "Eat Breakfast", isCompleted: false }];


app.get("/todos", (req, res) => {
    res.status(200);
    res.json(todos)
});

app.post("/create/todo", (req, res) => {
    const todo = req.body.todo;
    const isCompleted = req.body.isCompleted;

    const newtodo = { todo, isCompleted }
    todos.push(newtodo);
    res.json(newtodo)
    console.log("post done");

})

app.put("/update/todo/:name", (req, res) => {
    const name = req.params.name;

    const todoTask = todos.find(item => item.todo === name)

    if (todoTask) {
        const { todo } = req.body

        todoTask.todo = todo

        res.json(todoTask)

    } else {
        res.json("not found")
    }





})

app.delete("/delete/todo/:name", (req, res) => {
    const name = req.params.name;

    const todoTask = todos.find(item => item.todo === name)

    todos = todos.filter((item) => {
        item.todo != name;
    })

    res.json(todos)

})
app.put("/complete/todo/:name", (req, res) => {
    const name = req.params.name;

    const todoTask = todos.find(item => item.todo === name)

    if (todoTask) {
        const { todo, isCompleted } = req.body

        todoTask.todo = todo
        todoTask.isCompleted = isCompleted
        res.json(todoTask)

    } else {
        res.json("not found")
    }





})
app.get("/completed/todos", (req, res) => {


    const todoTask = todos.find(item => item.isCompleted === true)

    if (todoTask) {

        res.json(item)

    } else {
        res.json("not found")
    }





})

















app.listen(port, () => {
    console.log("the server run at port 3000");
});