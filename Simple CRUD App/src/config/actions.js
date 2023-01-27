export const addUseraction = (user) => {
    return {type:"add_user", payload:user}
}
export const updateUseraction = (newuser) => {
    return {type:"update_user", payload:newuser}
}
export const deleteUseraction = (id) => {
    return {type:"delete_user", payload:id}
}
