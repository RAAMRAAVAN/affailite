import { SECTION_INPUTS } from "./sectionType";

export const setSectionStatus=(users)=>{
    return{
        type: SECTION_INPUTS ,
        payload: users
    }
}