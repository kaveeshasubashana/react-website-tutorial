import React from 'react'
import logo from  '../assests/pizzaLogo.png'
function NavBar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={logo} />
        </div>
        <div className='righside'></div>
        
    </div>
  )
}

export default NavBar