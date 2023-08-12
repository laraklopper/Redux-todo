import React from 'react';// Import the React module to use React functionalities
import './App.css';// Import the CSS stylesheet to apply styles to the components
import Form from './store/Form';// Import the 'Form' component from the './store' directory


// App function component
function App() {
  return (
    <>
    <div className="App">
      {/* Header section */}
      <header id='header'>
        <h1 className='h1'>TO-DO APP</h1> {/* Render the title of the to-do app */}
      </header>

      {/* Main section containing the Form component */}
      <section id='section'>
        <div id='form-section'>
          <Form /> {/* Render the Form component which handles the to-do form */}
        </div>
      </section>
    </div>
    </>
  )
}

export default App;//Export the App component as the default export of this file to be used in other parts of the application.
