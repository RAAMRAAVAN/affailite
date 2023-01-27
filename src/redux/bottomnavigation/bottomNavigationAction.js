import { BOTTOM_NAVIGATION_INPUTS } from "./bottomNavigationType";

export const setSBottomNavigation=(page)=>{
    return{
        type: BOTTOM_NAVIGATION_INPUTS ,
        payload: page
    }
}