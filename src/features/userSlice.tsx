import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: { user: null },
    reducers: {
        loginReducer: (state, action) => {
            state.user = action.payload;
            if (action.payload.rememberMe) {
                localStorage.setItem('user', JSON.stringify(action.payload));
                localStorage.setItem('token', action.payload.token);
            }
        }

    }
});

export const { loginReducer } = userSlice.actions;
export const selectUser = state => state.user.user;

export default userSlice.reducer;
