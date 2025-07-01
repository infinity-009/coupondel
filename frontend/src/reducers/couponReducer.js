const initialState ={
    ActiveStateFilter :false,
    ActiveStateBrand :false,
}

const couponReducer = (state = initialState,{type,payload}) => {
  if(type==="toggleFilter"){
   return{
        ...state,
        ActiveStateFilter: payload,
      }
  }
  if(type==="toggleBrands"){
    return{
        ...state,
        ActiveStateBrand: payload,
      }
  }
  return state;
}

export default couponReducer