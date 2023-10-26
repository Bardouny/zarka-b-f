import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



function FirstContainer() {
    const navigate = useNavigate()
    return ( 
        <div className='container-loc  p-1'>
            <center>
                <h2 className='z-index-3'>Zarka Bank</h2>
                <h1 className='z-index-3'>The New version of</h1>
                <button className='btn btn-primary m-1 z-index-3' onClick={()=> navigate('/signUp')}> Sign up </button>
                <button className='btn btn-primary m-1 z-index-3' onClick={()=> navigate('/SignIn')}> Sign in </button>
            </center>
            <div className='particle-up'>.</div>
            <div className='particle-left-up'>.</div>
            <div className='particle-down'>.</div>
            <div className='particle-left-down'>.</div>
        </div>
     );
}




function Bars() {
    return ( 
        <div className='row mt-2'>
            <div className='col-md-4 mb-1'>
                <div className='w-90 bg-light p-4 o-h div-col'>
                <center>
                    <h3 className='mb-4'>new</h3>
                    <h2>featurs are aded</h2>
                    <Link to='/'>Learn more</Link>
                </center>
                </div>
            </div>
            <div className='col-md-4 mb-1'>
                <div className='w-90 bg-light p-4 o-h div-col'>
                    <center>
                        <h3 className='mb-4'>new</h3>
                        <h2>android/ios are coming</h2>
                        <Link to='/'>Learn more</Link>
                    </center>
                </div>
            </div>
            <div className='col-md-4 mb-1'>
            <div className='w-9 bg-light p-4 o-h div-col'>
                    <center>
                        <h3 className='mb-4'>new</h3>
                        <h2>featurs are aded</h2>
                        <Link to='/'>Learn more</Link>
                    </center>
                </div>
            </div>
        </div>
     );
}



function Container(props) {
    return ( 
        <>
        <FirstContainer/>
        <Bars/>
        </>
     );
}


export default Container;