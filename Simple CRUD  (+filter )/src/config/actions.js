export const addUseraction = (user) => {
    return {type:"add_user", payload:user}
}
export const updateUseraction = (user) => {
    return {type:"update_user", payload:user}
}
export const deleteUseraction = (id) => {
    return {type:"delete_user", payload:id}
}
export const filterUseraction = (idville) => {
    return {type:"filter_user", payload:idville}
}
export const clearfilterUseraction = () => {
    return {type:"clearfilter_user"}
}
