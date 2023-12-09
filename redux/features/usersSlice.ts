import {createSlice} from "@reduxjs/toolkit"

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: []
    },
    reducers: {
        getUsers: (state) => {
state.users
        }
    }
})

export const {getUsers} = usersSlice.actions
export default usersSlice.reducer