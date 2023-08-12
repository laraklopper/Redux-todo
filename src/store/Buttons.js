import React from 'react';// Import the React module to use react functionalities
import { useDispatch } from 'react-redux';//Import useDispatchfunctions from redux
import { completeTodo, editTodos ,removeTodos } from './reducers';//Import the completeTodos, editTodos and removeTodos actions from 'reducers'


export default function Buttons(props) {
  const dispatch = useDispatch();// Get the dispatch function from Redux to send actions

//Edit Task function to edit tasks in the task list
  const editTask = () => {
    let userInput = prompt("Edit task changes");// Prompt to get user input to edit the task
    let data = {id: props.id , content: userInput};
    if (userInput.trim() === '') { // Use trim() to remove leading/trailing spaces and check for an empty string
      alert('Please add a task');//Alert the user if the input field is empty
      return;
    }
    dispatch(editTodos(data)); // Dispatch the editTodos action with the updated task content
  }

//Remove task function to remove a task from the list
  const removeTask = () => {
    dispatch(removeTodos(props.id))// Dispatch the removeTodos action with the task ID to remove the task
  };

  //Function to mark the task as complete or incomplete
  const markComplete = () => {
    const taskComplete = { completed: !props.complete , id: props.id }; // Toggle the completion status
    dispatch(completeTodo(taskComplete));// Dispatch the completeTodo action to mark the task as being complete or incomplete
    
  };


  return (
    <div id='buttons'>
      {/* Buttons used to trigger actions */}
      <button className='button' onClick={removeTask}>
        REMOVE TASK
        </button>{/*Submit button to remove the task*/}
      <button className='button' onClick={editTask}>
        EDIT TASK
        </button>{/* Submit button to edit the task */}
      <button className='button' onClick={markComplete}>
        MARK COMPLETE
        </button>{/* Submit button to mark the task as complete */}
    </div>
  )
}
