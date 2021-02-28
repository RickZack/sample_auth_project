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


async function getUserInfo(id){
    const response = await fetch("/users/"+id);
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
