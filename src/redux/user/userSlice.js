import { createSlice } from '@reduxjs/toolkit';
import { number } from 'yup';

const initialState = {
    _id: null,
    fname: null,
    email: null,
    otp: number,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action) => {
            console.log(action.payload)
            state._id = action.payload._id
            state.fname = action.payload.fname
            state.email = action.payload.email
            state.otp = action.payload.otp
        },
        
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions;
export default userSlice.reducer;