const initailState = {
    villes:[
        {id:1, nom:"agadir"},
        {id:2, nom:"rabat"},
        {id:3, nom:"casablanca"},
    ],
    users:[
        {id:1,nom:"allaoui",prenom:"mohamed",ville:2},
        {id:2,nom:"benani",prenom:"hind",ville:1}
    ]
}
const reducer =(state=initailState,action)=>{
    switch(action.type){
        case "add_user":
            return {...state, users:[...state.users, action.payload]}
        case "update_user":
            const user =  state.users.find((u)=>u.id===parseInt(action.payload.id))
            if (user){
                user.nom = action.payload.nom
                user.prenom = action.payload.prenom
                user.ville = action.payload.ville
            }
            return state
            case "delete_user":
                return {...state, users:[...state.users.filter((u)=>u.id!==parseInt(action.payload))]}
            case "filter_user":
                return {...state, usersfilter:[...state.users.filter((u)=>u.ville===parseInt(action.payload))]}
            case "clearfilter_user":
                return {...state, usersfilter:null}
        default:
            return state
    }
}

export default reducer; 