import React, { useEffect, useState } from 'react';
import axios from "axios";

function useFetch() {
    const [user,setUser] = useState({})
    useEffect(()=>{
        if (1) {
            axios.post('http://192.168.1.147:5000/login',JSON.parse(sessionStorage.data))
        .then(res=>{
            if (res.data.success && res.data.user.name) {
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
    return {user}
}

export default useFetch;