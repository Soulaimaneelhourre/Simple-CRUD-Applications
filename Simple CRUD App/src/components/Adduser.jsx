import React from 'react'
import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {addUseraction} from "../config/actions"
import {useNavigate} from  'react-router-dom'


function Adduser() {
    const count  = useSelector(data=>data.users.length)
    const [name,setname]= useState()
    const [email,setemail]=useState()
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const handleclick = ()=> {
        dispatch(addUseraction({
            id:count+1,
            name:name,
            email:email
        }))
        navigate('/')

    }
  return (
    <form action="">
        <label htmlFor="">name</label>
        <input type="text" value={name} onChange={(e)=>setname(e.target.value)} />
        <label htmlFor="">email</label>
        <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} />
        <button onClick={handleclick}>enregistrer</button>
    </form>
  )
}

export default Adduser