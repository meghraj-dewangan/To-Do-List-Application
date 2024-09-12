import "./Body.css"
import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCircleCheck, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

// todos,setTodos,setEditTodo
function ToDoItem(props) {
    //  console.log(props)


    // function for handle  completed task
    function handleComplete(todo) {

        const updatedTodos = props.todos.map((item) => {
            if (item.id === todo.id) {
                return { ...item, completed: !item.completed };
            }
            return item;
        });

        props.setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));   //save updated todos in local storage
    };


    //function for handle edit

    function handleEdit(todo) {
        props.setEditTodo(todo);
        props.setInput(todo.title);
    }


    //function for handle delete task
    function handleDelete({ id }) {

        const updatedTodos = props.todos.filter((todo) => todo.id !== id)

        props.setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos))  //save updated todos in local storage

    };

    return (

        <>
            <div className="todoitem">

                {props.todos.map((todo) => (
                    <li className="liststyle" key={todo.id}>

                        <input className={`inputitem1 ${todo.completed ? "completed" : ""}`}     //completed is class which is use for when complete task line-through the text
                            type="text" value={todo.title}
                            onChange={(e) => e.preventDefault()}


                        />

                        <div>
                            <button className="completedbutton" onClick={() => handleComplete(todo)}><FontAwesomeIcon icon={faCircleCheck} /></button>
                            <button className="editbutton" onClick={() => handleEdit(todo)} ><FontAwesomeIcon icon={faPenToSquare} /></button>
                            <button className="deletebutton" onClick={() => handleDelete(todo)}><FontAwesomeIcon icon={faTrashCan} /></button>
                        </div>

                    </li>


                ))}



            </div>





        </>

    )
}

export default ToDoItem