import './App.css';
import { useState } from 'react';
import React from 'react';

//JavaScript
function App() {
  
  let [title, changeTitle] = useState(['First post', 'Second post', 'Third post']);
  let [thumb, thumbUp] = useState(0);

  //HTML 
  return (
    <div className='App'>
        <div className='black-nav'>
            <div>Jay's Portfolio</div>
        </div>
        <div className='list'>
          <h3> { title[0] } <span onClick={ () => { thumbUp(thumb + 1)} }>👍🏻</span> { thumb } </h3>
          <p>February 11</p>
          <hr/> 
        </div>

        <div className='list'>
          <h3> { title[1] } </h3>
          <p>February 12</p>
          <hr/>
        </div>

        <div className='list'>
          <h3> { title[2] } </h3>
          <p>February 13</p>
          <hr/>
        </div>
        
    </div>
  );
}

export default App;
// useState: 
// react: 
// abstraction
// full stack