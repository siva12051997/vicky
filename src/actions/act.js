import axios from "axios";

export function loadColor(){
    return(dispatch)=>{
        return axios.get("https://www.colr.org/json/color/random"),then((response)=>{
            dispatch(changeColor(response.data.new_color));
        })
    }
}