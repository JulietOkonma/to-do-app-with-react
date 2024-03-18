import React, { useState } from "react";
import ToDoform from "./todoform";
import Todo from "./todo";

function ToDoList() {
    const [todos, setTodos] = useState([])
    const addTodo = Todo => {
        if (!Todo.text || /^\s*$/.test(Todo.text)) {
            return
        }
        const newTodos = [Todo, ...todos]
        setTodos(newTodos)
        
    }



    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => 
            prev.map(item => (item.id === todoId ? newValue : item))
        );
 
    }



    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !==id)

        setTodos(removeArr);
    }

    

    const completeTodo = id => {
        let updatedTodos = todos.map ( todo => {
            if (todo.id === id) {
                todo.isComplete =  !todo.isComplete
            }
            return todo
        })
        setTodos(updatedTodos)
    }

    

    return (
        <div>
            <h1>Whats the plan for today?</h1>
            <ToDoform onSubmit={addTodo} />
            <Todo 
            todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
            updateTodo={updateTodo}/>
            
        </div>
    )
}
export default ToDoList