// import { insertService,selectService } from "../services/testservice.js";
// export const selectController = async(ctx) => {
//     try{
//       const response = await selectService();
//       ctx.status = 200;
//       ctx.body = response;
//     }
//     catch(e){
//       console.log(e.message)
//       ctx.status = 500;
//       ctx.body = { success : false, message: e.message };
//     }
//   }
//   export const insertController = async(ctx) => {

//     try{
//       const params = ctx.request.body;
//       const mobile = params.mobile;
//       const email = params.email;
//       const name = params.name;
//       const response = await insertService(mobile, name, email);
//       ctx.status = 200;
//       ctx.body = response;
//     }
//     catch(e){
//       console.log(e.message)
//       ctx.status = 500;
//       ctx.body = { success : false, message: e.message };
//     }
//   }
//import { insertService } from "../services/testservice.js";
// export const selectController = async(ctx) => {
//     try{
//       const response = await selectService();
//       ctx.status = 200;
//       ctx.body = response;
//     }
//     catch(e){
//       console.log(e.message)
//       ctx.status = 500;
//       ctx.body = { success : false, message: e.message };
//     }
//   }
import { insertservice,selectservice } from "../services/testservice.js";
export const selectController = async(ctx) => {

    try{
      const response = await selectservice();
      ctx.status = 200;
      ctx.body = response;
    }
    catch(e){
      console.log(e.message)
      ctx.status = 500;
      ctx.body = { success : false, message: e.message };
    }
  }

  export const insertController = async(ctx) => {

    try{
      const params = ctx.request.body;
      const mobile = params.mobile;
      const email = params.email;
      const name = params.name;
      const college = params.college;
      const city = params.city;
      const gender = params.gender;
      //const {mobile, name, email} = params; 

    
      const response = await insertservice(mobile, name, email, college, city, gender);
      ctx.status = 200;
      ctx.body = response;
    }
    catch(e){
      console.log(e.message)
      ctx.status = 500;
      ctx.body = { success : false, message: e.message };
    }
  }