const initialState = { userData:{users:[]}};
export function userSearchdata(state = initialState, action) {
    switch (action.type) {
        case 'RESET_USER':
            return {
                users: action.usersData
            };
        case 'SHOW_USERS':
            return {
                users: action.users
            };    
        default:
            return state
    }

}