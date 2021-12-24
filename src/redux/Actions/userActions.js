export const userCreator = (user) => {
    return {
        type: "SET_USER",
        payload: user,
    };
};

export const userLogout = ()=>{
    return{
        type:"LOGOUT_USER",
    };
}