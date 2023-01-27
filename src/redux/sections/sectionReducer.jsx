import { SECTION_INPUTS } from "./sectionType";

const initialState={
    sectionStatus: false,
}
const sectionReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case SECTION_INPUTS:
            return{
                sectionStatus:action.payload,
            }     
        
        default: return(state);       
    }
}
export default sectionReducer;