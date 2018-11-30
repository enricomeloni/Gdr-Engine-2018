import {createActions} from 'redux-actions'

export const { increment, decrement } = createActions({
    INCREMENT: (amount = 1) => ({ amount: amount }),
    DECREMENT: (amount = 1) => ({ amount: -amount})
});
