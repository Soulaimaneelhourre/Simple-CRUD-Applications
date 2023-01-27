import './App.css'
import { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addUseraction,updateUseraction,deleteUseraction,filterUseraction,clearfilterUseraction} from './config/actions'

function App() {
  const villes = useSelector(data=>data.villes)
  const users = useSelector(data=>data.users)
  const usersfilter = useSelector(data=>data.usersfilter)
  const listusermap = usersfilter ? usersfilter : users
  const indexuser= users.length;
  const [id,setid]= useState()
  const [nom,setnom]=useState()
  const [prenom,setprenom]=useState()
  const [ville,setville]=useState(1)
  const [villefilter,setvillefilter]=useState(1)
  const dispatch = useDispatch()
  const handleenregistrer=()=>{
      dispatch(addUseraction(
        {
          id:indexuser +1,
          nom:nom,
          prenom:prenom,
          ville:ville
        }
      ))
      handleclear()
  }
  const handleclear =()=>{
    setnom('')
    setprenom('')
    setville(1)
  }
  const handlemodifier = (id)=>{
      const user= users.find((u)=>u.id===parseInt(id))
      setid(id)
      setnom(user.nom)
      setprenom(user.prenom)
      setville(user.ville)
  }
  const handleedit=()=>{
    dispatch(updateUseraction({id:id,nom:nom,prenom:prenom,ville:ville}))
    handleclear()
    setid("")
  }
  const handledelete=(id)=>{
    dispatch(deleteUseraction(id))
  }
  const handleFilter=()=>{
    dispatch(filterUseraction(villefilter))
  }
  const handleFilterclear=()=>{
    dispatch(clearfilterUseraction(villefilter))
  }

  return (
    <div className="App">
      <div>
       <h1>CRUD REACT REDOX LIST </h1>
       <label htmlFor="">Nom: </label>
       <input type="text" value={nom} onChange={(e)=>setnom(e.target.value)}/>
       <label htmlFor="">Prenom</label>
       <input type="text" value={prenom} onChange={(e)=>setprenom(e.target.value)}/>
       <label htmlFor="">ville</label>
       <select name="" id="" value={ville} onChange={(e)=>setville(e.target.value)}>
        {villes.map((ville,index)=>{
          return (
          <option key={index} value={ville.id}>{ville.nom}</option>)
        })}
       </select>
       {id ? <button onClick={()=>handleedit()}>confirmer</button>:
       <button onClick={()=>handleenregistrer()}>Enregistrer</button>}
       <button onClick={()=>handleclear()}>Clear</button>
       </div>
       <div>
        <label htmlFor="">Filtrer par :</label>
        <label htmlFor="">ville</label>
        <select name="" id="" value={villefilter} onChange={(e)=>setvillefilter(e.target.value)}>
            {villes.map((ville,index)=>{
              return (
              <option key={index} value={ville.id}>{ville.nom}</option>)
            })}
        </select>
        <button onClick={()=>handleFilter()}>filtrer</button>
       <button onClick={()=>handleFilterclear()}>Clear</button>
       </div>
       <table>
        <thead>
          <tr>
            <td>id</td>
            <td>nom</td>
            <td>prenom</td>
            <td>ville</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
          
            {listusermap.map((user,index)=>{
              const ville = villes.find((v)=>v.id===parseInt(user.ville))
              return(<tr key={index}>
              
              <td>{user.id}</td>
              <td>{user.nom}</td>
              <td>{user.prenom}</td>
              <td>{ville.nom}</td>
              <td>
                <button onClick={()=>handlemodifier(user.id)}>modifier</button>
                <button onClick={()=>handledelete(user.id)}>supprimer</button>
              </td></tr>)
            })}
            
          
        </tbody>
       </table>
    </div>
  )
}

export default App
