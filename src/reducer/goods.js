import {handleActions} from 'redux-actions';

export const goods = handleActions({
    GET_GOODS: (state, action) => ({
        ...state,
        data: action.payload
    })
}, {
    data: []
});