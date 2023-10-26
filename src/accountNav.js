import React from 'react';
import { Link } from 'react-router-dom';

// function AccountNav() {
//     return ( 
        
//      );
// }
function MiniNav() {
    return ( 
        <>
        <nav className='mini-nav'>
            <Link to='/account'> Home </Link>
            <Link to='wallet'> Wallet </Link>
            <Link to='Sendmoney'> Send mony  </Link>
            <Link to='lastact'> Last actions </Link>
            <Link to='Settings'> Settings </Link>
            <Link className='ms-auto bg-danger rounded' onClick={()=> sessionStorage.clear()}> Sign out </Link>

        </nav>
        </>
     );
}

export {MiniNav};