import React from 'react';// Import the React module to use react functionalities
import { useState } from 'react';//Import useState from react
import { useDispatch, useSelector } from 'react-redux';//Import useDispatch and useSelector functions from redux
import { addTodos } from './reducers';// Import the addTodos reducer from the 'reducers' file
import Buttons from './Buttons';//Import the Buttons component

//Form function component
export default function Form(props) {//Export function component
    // Define a state variable 'text' to store the input value
    const [text, setText] = useState('');

    // Access the 'value' property from the Redux store using the 'useSelector' hook
    const todoList = useSelector((state) => state.todoReducer.data);

    const dispatch = useDispatch();// Dispatch function to send actions to the Redux store


    // Function to handle the form submission
    const addTask = (event) => {
          event.preventDefault();//Prevent default form submission 
    if (text.trim() === '') { // Use trim() to remove leading/trailing spaces and check for an empty string
      alert('Please add a task');//Alert the user if the input field is empty
      return;
    }
    // Dispatch the 'addTodos' action to add a new task with the content and completed status
    dispatch(addTodos({ content: text, completed: false }));
        setText(''); // Clear the input field after submitting the task
    };
    let tasks = Object.entries(todoList) || null // Convert the todoList object into an array of [key, value] pairs (taskId, task)

    console.log(tasks) //Display todo list in the console

    return (
        <div>
            <form id='form'>
                <label id='label'>Task: </label>
                {/* Input field and submit button */}
                <input
                    value={text} // The current value of the input (controlled component)
                    onChange={(e) => setText(e.target.value)} // Event listener to handle input changes and update 'text' state
                    placeholder='Enter a task'
                    id='input'
                />
                
                    <button className='button' id='addTaskBtn' type='submit' onClick={addTask}>ADD TASK</button> {/* Submit button to add the task */}
                    
              
            </form>
            <h2 className='h2'>TO-DO LIST</h2>
            {/* Display the todo list */}
            <div id='todo-list'>
                                    {/* Iterate over todoList and display each task */}
                  
             {Object.entries(todoList).map(([todoId, todo])=>(
                <ul key={todoId} id='task-list'>     
                     <li className='task'>Task: {todo.content} <br /> Completed : {todo.completed ? "Yes" : "No"}
                    <Buttons id={todoId} completed={todo.completed} className={props.complete ? 'Yes' : 'No'} />
                 </li>
                </ul>
             ))}
            </div>

        </div>
    );
}