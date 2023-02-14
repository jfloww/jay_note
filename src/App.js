import './App.css';
import { useState } from 'react';
import Header from './Header';
// scroll down -> motion graphic for each post
//JavaScript
function App() {
  
  let [title, changeTitle] = useState(['Introduction', 'Skills', 'About me', 'Archiving', 'Career', 'Projects']);
  

  //HTML 
  return (
    <div className='App'>
        <Header/>
        <div className='list'>
          <h3> { title[0] } </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>
        <div className='list'>
          <h3> Test </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>
        <div className='list'>
          <h3> Test </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>
        <div className='list'>
          <h3> Test </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>
        <div className='list'>
          <h3> Test </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>
        <div className='list'>
          <h3> Test </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>
        <div className='list'>
          <h3> Test </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>
        
        <div className='list'>
          <h3> { title[1] } </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>
        <div className='list'>
          <h3> { title[2] } </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>
        <div className='list'>
          <h3> { title[3] } </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
          <hr/> 
        </div>
        <div className='list'>
          <h3> { title[4] } </h3> {/* My Introduciton */}
            <p>Hello, This is Jaehoon Jung software egineer</p>
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