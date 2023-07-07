import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface IProps{
    children?: ReactNode;
    initialState?: StateSchema;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: IProps) => {
    const { children, initialState, asyncReducers } = props;

    const store = createReduxStore(
        initialState,
        asyncReducers as ReducersMapObject<StateSchema>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
