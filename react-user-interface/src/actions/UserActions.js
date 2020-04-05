export const userActions = {
    resetUserData,showUsers
};

function resetUserData(usersData) {
    return dispatch => {
        return dispatch({
            type: "RESET_USER",
            usersData   
        });
    };
}

function showUsers(users){
    return dispatch => {
        return dispatch({
            type: "SHOW_USERS",
            users   
        });
    };
}