import { configureStore } from '@reduxjs/toolkit';// Import the configureStore function from Redux Toolkit
import reducer from './reducers';// Import the action creators 'addTodos' and 'removeTodos' from the './reducers' file
// Create and configure the Redux store using the configureStore function
export default configureStore({
    // Add the action creators as reducers to the store
    reducer: {
        todoReducer: reducer
    },
});