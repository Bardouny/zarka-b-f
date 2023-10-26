import React, {  } from 'react';
import { Link ,NavLink} from 'react-router-dom';
import brand from './brand2.png'

function NavBar(props) {
    return ( 
        <nav className='rounded'>
            <NavLink to='/' className='navbar-brand'><img src={brand}></img></NavLink>
            <NavLink to='/' className=''>Home</NavLink>
            <NavLink to='/account' className=''>account</NavLink>
            <NavLink to='/about' className=''>about</NavLink>
        </nav>
     );
}

export default NavBar;
