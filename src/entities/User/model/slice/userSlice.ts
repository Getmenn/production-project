import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/user';

const initialState: UserSchema = {
    authData: { id: '1', username: 'test' },
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state) => {
            state.authData = { id: '2', username: 'test2' };
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
