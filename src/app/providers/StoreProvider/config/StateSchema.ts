import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

// export interface CounterState{
//     value: 0;
// }
export interface StateSchema{
    counter: CounterSchema;
    // user: UserSchema;
}
