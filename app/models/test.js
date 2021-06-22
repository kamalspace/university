import pkg from 'pg';
const {Pool} = pkg;
import {psqlConfig} from '../config/postgresConfig.js';

const pool = new Pool({
    connectionString: psqlConfig,
  });
pool.on('error', (error)=>{
    console.info("Unexpected error on idle client",error);
    process.exit(-1);
})
export const createTestDB = async() => {
    const client = await pool.connect();

    let query = 'create table student_info(mobile varchar(13) primary key, name varchar(50), email varchar(50), college varchar(50), city varchar(10), gender varchar(5))';
  
    try{
      let resp =  await client.query(query)
      console.log(resp);
      return resp;
    }
    catch(e){
      return false;
    }
    finally {
        client.release();
    }
}
//createTestDB()
export const insertLoginUser = async(mobile, name, email, college, city, gender) => {
  const client = await pool.connect();
  
  let query = `INSERT INTO student_info(mobile, name, email, college, city, gender ) VALUES('${mobile}', '${name}', '${email}', '${college}', '${city}', '${gender}'  ) RETURNING *`;

  try{
    let resp =  await client.query(query)
    console.log(resp);
    return {success : true , data: resp.rows[0]};;
  }
  catch(e){
        let message="some error occured";
      return {success : false , message};
  }finally {
      client.release();
  }
}
 insertLoginUser(7903039388,"kamal","kamalrai@gmail.com","srm","gzb","male");
export const selectLoginUser = async() => {
  const client = await pool.connect();
  
  let query = `SELECT * FROM student_info `;
  try{
      let resp =  await client.query(query)
     console.log(resp.rows);
      return {success : true , data: resp.rows};;
   }
  catch(e){
         let message = "Some Error occured"
         return {success : false , message};
      }
  finally {
      client.release();
  }
}


selectLoginUser();




  // export const selectLoginUser = async() => {
  //   const client = await pool.connect();
    
  //   let query = `SELECT * FROM user_info   `;
  //   try{
  //       let resp =  await client.query(query)
  //      console.log(resp.rows);
  //         return {success : true , data: resp.rows}
  //   }
  //   catch(e){
  //          let message = "Some Error occured"
  //          return {success : false , message};
  //       }
  //   finally {
  //       client.release();
  //   }
  // }
  // selectLoginUser();
  