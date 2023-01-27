import React from 'react'
import { useParams } from 'react-router-dom'
import {useState} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {updateUseraction} from "../config/actions"
import {useNavigate} from  'react-router-dom'


function Updateuser() {
    const {id}= useParams()
    const user  = useSelector(data=>data.users.find((u)=>u.id===parseInt(id)))
    const [name,setname]= useState(user.name)
    const [email,setemail]=useState(user.email)
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const handleclick = ()=> {
        dispatch(updateUseraction({
            id:id,
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

export default Updateuser