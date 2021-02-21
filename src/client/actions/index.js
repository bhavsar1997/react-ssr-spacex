import axios from 'axios';

export const FETCH_SPACEXDATA='fetch_spacexdata';
export const fetchSpaceXdata = (filters) => async dispatch =>{
    const res = await axios.get(`https://api.spacexdata.com/v3/launches?limit=${filters.limit}&launch_success=${filters.launch_success}&land_success=${filters.landing_status}&launch_year=${filters.launch_year}`)

    dispatch({
        type: FETCH_SPACEXDATA,
        payload: res
    });
};