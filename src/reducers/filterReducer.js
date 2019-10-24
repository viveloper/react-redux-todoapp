import {SHOW_ALL, DATE} from '../actions/filterActions';

export function filterReducer(previousState, action) {
    if(action.type === SHOW_ALL){
        return previousState.filter;
    }
    else if(action.type===DATE) {
        // not implemented
        return previousState.filter;
    }
    else{
        return previousState.filter;
    }
    
}