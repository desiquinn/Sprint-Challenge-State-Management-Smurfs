import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE } from '../actions/action.js';


export const initialState = {
    smurfs: null, 
    error: "", 
    loading: false,
}

export const reducer = (state = initialState, action) => {
    console.log('Action:', action)
    switch(action.type) {
        case FETCH_SMURFS_START:
            return {
                ...state,
                error: "",
                loading: true, 
            };
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state, 
                error: "",
                loading: false,
                smurfs: action.payload
            };
        case FETCH_SMURFS_FAILURE:
            return {
                ...state, 
                error: "",
                loading: false,
                smurfs: action.payload,
            };
        default:
            return state
    };

};