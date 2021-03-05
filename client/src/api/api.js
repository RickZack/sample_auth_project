import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

async function getPublicInfo(){
    const response = await fetch("/public");
    const res_json = await response.json();
    if(response.ok){
        return res_json;
    } else {
        const err={status: response.status, errObj:res_json};
        throw err;
    }
}

      
async function getUserInfo(id,getAccessTokenSilently){
    const token = await getAccessTokenSilently();
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    };
    const response = await fetch("/users/"+id,config);
    const user_json = await response.json();
    if(response.ok){
        return user_json;
    } else {
        const err={status: response.status, errObj:user_json};
        throw err;
    }
}
const API={getUserInfo, getPublicInfo}
export default API;
