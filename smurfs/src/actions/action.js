import axios from 'axios';

const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_START';
const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_START';

//get request link http://localhost:3333/smurfs
//post request link http://localhost:3333/smurfs

export const getSmurfs = () => {
    return dispatch => {
        dispatch({type: FETCH_SMURFS_START});
        axios.get('http://localhost:3333/smurfs')
            .then(res => {
                console.log('getSmurfs res:', res)
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
            })
            .catch(err => {
                console.log('getSmurfs err:', err)
                dispatch({type:FETCH_SMURFS_FAILURE, payload: err.response})
            })
    };
};