import {pushReqArray,loadDataArray} from './actions'


export const initialState = {
  progress:0,
  params_id:[],
  requires_id:[]
  
  
};

export const rootReducer = (state,action) =>{
  switch (action.type){
    case 'LOAD_DATA' : 
    return {...state, requirements : action.payload}
    case 'LOAD_GOVS' : 
    return {...state, govs : action.payload}
    case 'LOAD_SP_DATA':
    return {...state, data : action.payload}
    case 'LOAD_SP_DATA':
    return {...state, data : action.payload}
    case 'FETCH_GOVS_REFRESH':
    return {...state, govs : action.payload}
    case 'NOT_CHOOSE_REQS':
    return {...state, selected : action.payload}
  
  default  : return state
 
}}