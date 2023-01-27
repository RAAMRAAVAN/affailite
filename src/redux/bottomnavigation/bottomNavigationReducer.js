import { BOTTOM_NAVIGATION_INPUTS } from "./bottomNavigationType";

const initialState={
    bottomNavigationValue: 0,
}
const bottomNavigationReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case BOTTOM_NAVIGATION_INPUTS:
            return{
                bottomNavigationValue:action.payload,
            }     
        
        default: return(state);       
    }
}
export default bottomNavigationReducer;