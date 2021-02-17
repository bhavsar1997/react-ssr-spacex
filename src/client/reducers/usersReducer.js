import { FETCH_SPACEXDATA } from '../actions';

export default (state =[],action)=>{
    switch(action.type){
        case FETCH_SPACEXDATA:
            return action.payload.data;
        default:
            return state;
    }
};