import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

//get request link http://localhost:3333/smurfs
//post request link http://localhost:3333/smurfs

export const getSmurfs = () => {
    return dispatch => {
        console.log('Get Smurfs Requested')
        dispatch({type: FETCH_SMURFS_START});
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('getSmurfs res:', res)
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log('getSmurfs err:', err)
                dispatch({type: FETCH_SMURFS_FAILURE, payload: err.response})
            })
    };
};

export const addSmurfs = () => {
    return dispatch => {
        console.log('Get Smurfs Requested')
        dispatch({type: FETCH_SMURFS_START});
        axios.post('http://localhost:3333/smurfs')
            .then(res => {
                console.log('getSmurfs res:', res)
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log('getSmurfs err:', err)
                dispatch({type: FETCH_SMURFS_FAILURE, payload: err.response})
            })
    };
};