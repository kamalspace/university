// import { selectLoginUser, insertLoginUser } from '../models/test.js';
// export const selectService = async() =>{
//     let resp = await selectLoginUser()
//     console.log(resp);
//     return resp;
// }
// export const insertService = async(mobile,name, email)=>{

//     let resp = await insertLoginUser(mobile, name, email)
//     console.log(resp);
//     return resp;
// }
// selectService();
// insertService("1111", "abc", "abc@gmail.com");

//import { insertLoginUser } from '../models/test.js';
// export const selectService = async() =>{
//     let resp = await selectLoginUser()
//     console.log(resp);
//     return resp;
// }
import { selectLoginUser, insertLoginUser } from '../models/test.js';

export const selectservice = async()=>{
    let response = await selectLoginUser()
    console.log(response);
    return response;
}

export const insertservice  = async(mobile,name,email,college,city,gender)=>{
    let response = await insertLoginUser(mobile, name, email,college,city,gender)
    console.log(response);
    return response;
}

selectservice();
