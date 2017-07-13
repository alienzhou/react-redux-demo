import {handleActions} from 'redux-actions';

export const goods = handleActions({
    REQUEST_GOODS: (state, action) => ({
        ...state,
        isFetching: true
    }),
    RECEIVE_GOODS: (state, action) => ({
        ...state,
        isFetching: false,
        data: action.payload
    })
}, {
    isFetching: false,
    data: []
});