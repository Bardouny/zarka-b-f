import React, { useContext, useEffect, useState } from 'react';
import {MiniNav} from './accountNav';
import {Link, Outlet, useSearchParams} from 'react-router-dom';
import Offcanvas from './offCanvas';
import axios from "axios";
import ctx from './context';
import useFetch from './myHook';


function Tablet({title ,amount ='Loading...',dh = '' ,color = 'green'}) {
    
    return ( 
        <div className='col-md-4 bg-light p-5'>
            <center>
                <h3>{title}</h3>
                <h1 style={{color : color}}>{amount + dh}</h1>
            </center>
        </div>
     );
}

export function SendMony() {
    const {user} = useFetch()
    const [sender,set] = useState({"name": '',"password": '',"Rname":'',"amount":''})
    const send = e =>{
        e.preventDefault()
        axios.put('http://192.168.1.147:5000/send',sender)
        .then(res =>{
            if (res.data.success) {
                alert('Money Sended Successfily')
            } else {
                alert('Somthing Went Wrong')
            }
        })
    }
    return (
        <div className='form-container'>
            <form onSubmit={send}>
                <center>
                    <h1 className='mb-5 mt-1 z-index-3'>Send money</h1>
                    <input type='text' className='mb-3 z-index-3' placeholder=' User Name :' value={sender.name} onChange={e => set({...sender, "name":e.target.value})} />
                    <br></br>
                    <input type='text' className='mb-3 z-index-3' placeholder=' Password :' value={sender.password} onChange={e => set({...sender, "password":e.target.value})} />
                    <br></br>
                    <input type='text' className='mb-3 z-index-3' placeholder=' Resiver name :' value={sender.Rname} onChange={e => set({...sender, "Rname":e.target.value})} />
                    <br></br>
                    <input type='number' className='mb-3 z-index-3' placeholder=' amount :' value={sender.amount}  onChange={e => set({...sender, "amount":e.target.value})} />
                    <br></br>
                    <button className='btn btn-primary mt-1 z-index-3'> Send... </button>
                    <br></br>
                    <Link to='/'>Go back</Link>
                    <div className='particle-up'>.</div>
                </center>
            </form>
        </div>
     );
}



export function Dcontainer() {
    const {user} = useFetch()
    return ( 
        <div className='container-fluid p-5'>
            <div className='row counter-box'>
                <Tablet title=' Amount ' amount={user.sallery} dh=' DH'/>
                <Tablet title=' Last Sign ' amount={user.lastSign} />
                <Tablet title=' Last drow ' amount={user.lastDrow + ' DH'}/>
            </div>
        </div>
    );
}

export function HomeContainer({color = '#3939c9'}) {
    const {user} = useFetch()
    return ( 
        <div className='container-fluid p-5'>
            <div className='row counter-box'>
                <Tablet title=' Name ' amount={user.name} color={color}/>
                <Tablet title=' Date OF Sign ' amount={user.lastSign} color={color}/>
                <Tablet title=' Amount ' amount={user.sallery} dh=' DH'color={color}/>
            </div>
        </div>
     );
}

//....................................................//


export function LasAct() {
    const {user} = useFetch()
    return ( 
        <div className='container'>
            <table className='table table-stripped text-white'>
                <thead>
                <tr className='bg-info text-dark'>
                    <th>From/to</th>
                    <th>Amount</th>
                    <th>Time</th>
                    <th>type</th>
                </tr>
                </thead>
                <tbody>
                {user.lastAct? user.lastAct.map(
                    e => <tr key={Math.random() *1230000} className={e.amount < 0?'bg-danger':'bg-success'}>
                        <td>{e.from}</td>
                        <td>{e.amount}</td>
                        <td>{e.time}</td>
                        <td>{e.type}</td>
                        </tr>
                    ):null}
                </tbody>
            </table>
        </div>
     );
}







//....................................................//
function Account() {
    const [params,setSearch] = useSearchParams()
    const data = {
        "name" : params.get('name'),
        "password" : params.get('password')
    }
    if (data.name) {
        sessionStorage.data = JSON.stringify(data)
    }
    //sessionStorage.data = JSON.stringify(data)

    const [user,setUser] = useState({})
    useEffect(()=>{
        if (data.name) {
            axios.post('http://192.168.1.147:5000/login',JSON.parse(sessionStorage.data))
        .then(res=>{
            if (res.data.success) {
                setUser(res.data.user)
                sessionStorage.user = JSON.stringify(user)
            } else {
                console.log('user Not Found')
            }
        })
        .catch(err=>{
            console.log(err);
        })
        }
    },[location.href])
    return ( 
        <div className='account'>
            <MiniNav/>
            <Offcanvas/>
            <hr></hr>
            <Outlet/>
        </div>
    );
}

export default Account;