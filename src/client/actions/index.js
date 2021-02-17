import axios from 'axios';

export const FETCH_SPACEXDATA='fetch_spacexdata';
export const fetchSpaceXdata = (filters) => async dispatch =>{
    const res = await axios.get('https://api.spacexdata.com/v3/launches?limit=100'+filters)

    dispatch({
        type: FETCH_SPACEXDATA,
        payload: res
    });
};