import React from 'react'
import './App.css';

function App() {
  return (
    <div>
        <div className='hello'>
          <nav>
            <div className='image'>
            </div>
            <ul className='main'>
              <li className='m-5'>ABOUT</li>
              <li className='m-5'>TEAM</li>
              <li className='m-5'>CONTACT</li>
              <li className='m-5 last-item'>REGISTER</li>
            </ul>
          </nav>
          <h1 className='h1'>
            Lorem ipsum dolor, sit amet <br /> consectetur adipisicing.
          </h1>
          <p>Lorem ipsum dolor sit.</p>
          <div className='button1'>
          <button className='btn btn-outline-light btn-md border1 '>Get Started</button>
          <h1 className='text-light m-5'>Lorem, ipsum dolor.
          </h1>
          <div>
          <input className='border border-light rounded-4' type="email" id="" />
          <button className='btn-sm btn-light'>Login</button>
          </div>
          </div>
        </div>
    </div>
  )
}
export default App;
