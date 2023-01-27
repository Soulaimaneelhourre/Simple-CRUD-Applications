import React from 'react'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux"
import {deleteUseraction} from "../config/actions"


function Userlist() {
  const users = useSelector((data)=>data.users)
  const dispatch = useDispatch();
  const handleClick = (id)=>{
        dispatch(deleteUseraction(id))
  }
  return (
    <div>
      <p>
        <Link to="/add-user">
          <button>add user </button>
        </Link>
      </p>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
         {users.map((user,index)=>{
          return(
            <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <Link to={`/update-user/${user.id}`}><button>edit</button></Link>
             <button onClick={()=>handleClick(user.id)}>delete</button>
            </td>
          </tr>
          )
         })}
        </tbody>
      </table>
    </div>
  )
}

export default Userlist