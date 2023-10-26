import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const SimpleForm = ({sign = 'admin'}) => {
    const navigate = useNavigate()
    const [targ ,set] = useState({"name": '',"password" : '',"amount":''})
    const Submit = (e) =>{
        e.preventDefault()
        axios.post('http://192.168.1.147:5000/admin',targ)
        .then(res=>{ 
            if (sign == 'Sign up') {
                alert('Acount Created Successfuly !.')
                setTimeout(()=>{
                    navigate('/')
                },2000)
            } else {
                const {success,user} = res.data
                if (success) {
                    console.log(`/account/?name=${user.name}&password=${user.password}`)
                    setTimeout(()=>{
                        navigate(`/account/?name=${user.name}&password=${user.password}`)
                    },2000)
                } else {
                    set({"name": '',"password" : ''})
                    alert('Failde ! : Somthing went wrong')
                }
            }
        })
        .catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='form-container'>
            <form onSubmit={Submit}>
                <center>
                    <h1 className='mb-5 mt-1 z-index-3'>{sign}</h1>
                    <input type='text' className='mb-3 z-index-3' placeholder=' User Name :' value={targ.name} onChange={e => set({...targ,"name":e.target.value})}/>
                    <br></br>
                    <input type='password' className='mb-3 z-index-3' placeholder=' Password :' value={targ.password} onChange={e => set({...targ,"password":e.target.value})}/>
                    <br></br>
                    <input type='password' className='mb-3 z-index-3' placeholder=' Amount :' value={targ.amount} onChange={e => set({...targ,"amount":e.target.value})}/>
                    <br></br>
                    <input type='password' className='mb-3 z-index-3' placeholder=' Z goverment ID :' />
                    <br></br>
                    <button className='btn btn-primary mt-1 z-index-3'> {sign} </button>
                    <br></br>
                    <Link to='/'>Go back</Link>
                    <div className='particle-up'>.</div>
                </center>
            </form>
        </div>
    )
};

export default SimpleForm;
