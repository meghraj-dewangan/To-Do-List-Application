import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan,faCircleCheck,faPenToSquare,faCirclePlus,faPlus } from '@fortawesome/free-solid-svg-icons';




// input,setInput,todos,setTodos

function Form(props) {

// for taking input writing in item input

    function onInputChange(e) {
        props.setInput(e.target.value)


    }

    function onFormSubmit(e) {
        e.preventDefault();
        let updatedTodos;
    
        if (props.editTodo) {
          // If editing, update the existing todo
          updatedTodos = props.todos.map((item) =>
            item.id === props.editTodo.id ? { ...item, title: props.input } : item
          );
          props.setEditTodo(null); // Reset editing state
        } else {
          // If adding a new todo
          updatedTodos = [...props.todos, { id: Math.random() + 1, title: props.input, completed: false }];
        }
    
        props.setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos)); // Save updated todos to local storage
        props.setInput(""); // Clear input field

    }



    return (
        <>

        <div className='formdiv'>
            <form onSubmit={onFormSubmit} >
                <input className="inputform" type="text" placeholder="Enter To Do..."
                    onChange={onInputChange}
                    value={props.input}
                    required

                />
                <button className='addtotobutton' type="submit">{props.editTodo ? <FontAwesomeIcon icon={faCirclePlus} /> :<FontAwesomeIcon icon={faCirclePlus} />}</button>



            </form>
            </div>


        </>
    )
}

export default Form;