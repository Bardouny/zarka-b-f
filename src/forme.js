import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'

function FormContainer({sign,ame,disable = false}) {
    const navigate = useNavigate()
    const [targ ,set] = useState({"name": '',"password" : '',"Zhome": '',"Zid":''})
    const Submit = (e) =>{
        e.preventDefault()
        console.log('sumbit');
        axios.post(ame,targ)
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
                    set({"name": '',"password" : '',"Zhome": '',"Zid":''})
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
                    <input type='text' className='mb-3 z-index-3' placeholder=' User Name :' value={targ.name} onChange={e => set({...targ,"name":e.target.value})} required={true} name='name' autoComplete='name'/>
                    <br></br>
                    <input type='password' className='mb-3 z-index-3' placeholder=' Password :' value={targ.password} onChange={e => set({...targ,"password":e.target.value})} required={true} name='password' autoComplete='password'/>
                    <br></br>
                    <input type='password' className='mb-3 z-index-3' placeholder=' Z home Adress :' value={targ.Zhome} onChange={e => set({...targ,"Zhome":e.target.value})} disabled={disable} name='Zhome' autoComplete='Zhome'/>
                    <br></br>
                    <input type='password' className='mb-3 z-index-3' placeholder=' Z goverment ID :' value={targ.Zid} onChange={e => set({...targ,"Zid":e.target.value})} disabled={disable} name='Zid' autoComplete='Zid'/>
                    <br></br>
                    <button className='btn btn-primary mt-1 z-index-3'> Submit... </button>
                    <br></br>
                    <Link to='/'>Go back</Link>
                    <div className='particle-up'>.</div>
                </center>
            </form>
        </div>
     );
}

export default React.memo(FormContainer);