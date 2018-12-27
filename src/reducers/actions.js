const PUSH_REQ_ARRAY = 'PUSH_REQ_ARRAY';
const LOAD_DATA = 'LOAD_DATA';
const REFRESH_PROGRESS_FORM = 'REFRESH_PROGRESS_FORM';
const LOAD_GOVS = 'LOAD_GOVS'
const LOAD_SP_DATA = 'LOAD_SP_DATA'
const FETCH_GOVS_REFRESH = 'FETCH_GOVS_REFRESH'
const NOT_CHOOSE_REQS = 'NOT_CHOOSE_REQS'


export const loadSPData = (data) =>{
    return{
        type: LOAD_SP_DATA,
        payload:data
     }

}

export const loadGovs = (data)=>{
    return{
        type: LOAD_GOVS,
        payload:data
     }
    }

export const pushReqArray = (req)=>{
 return{
     type: PUSH_REQ_ARRAY,
     payload:req
  }
 }

 export const loadDataArray = (data)=>{
 return{
     type: LOAD_DATA,
     payload:data
  }
 }
 
 export const fetchGovsRefresh = (data)=>{
 
    return{
         type:FETCH_GOVS_REFRESH,
         payload:data
    }
    }

    export const notChooseReqs = (data)=>{
 
        return{
             type:NOT_CHOOSE_REQS,
             payload:data
        }
        }
 
