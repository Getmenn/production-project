import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserSchema } from '../types/user';

const initialState: UserSchema = {
    authData: undefined, // не точно
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // initAuthData в app.tsx
        setAuthData: (state, payload: PayloadAction<User>) => { // не точно
            state.authData = payload.payload;
        },

    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
