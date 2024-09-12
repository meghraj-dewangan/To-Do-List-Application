import ToDoItem from "./ToDoItem";
import Form from "./Form";
import "./Body.css"
import { useState } from "react";


function ToDoList(){

    //The reason for using localStorage.getItem("todos")
    // instead of localStorage.setItem("todos") is to retrieve any previously 
    //saved to-do items from the browser's local storage when the app first loads.

    const[input,setInput]= useState("");
    const[todos,setTodos] = useState(() => {
        const savedTodos = localStorage.getItem("todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
      });
    const[editTodo, setEditTodo] = useState(null);



    return(
        <>

        <div className="todolistcontainer">
            <div>
                <Form
                input = {input}
                setInput = {setInput}
                todos = {todos}
                setTodos = {setTodos}
                editTodo = {editTodo}
                setEditTodo = {setEditTodo}
                
                
                />
            </div>
            <div className="todoitemcontainer">
                <ToDoItem
                
                todos={todos}
                setTodos = {setTodos}
                setEditTodo = {setEditTodo}
                setInput = {setInput}

                
                />
            </div>
            
        </div>
        </>
    )
}

export default ToDoList;