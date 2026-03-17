const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require('express');
const app = express();


// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'BLOG',
    password: '@ABCD1234'
  });


//Generate  randome data of a user
let fakeRandomUser = ()=>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
}


app.get('/',(req,res)=>{
    let q ='SELECT COUNT(*) FROM USERS';

    try{
      connection.query(q,(err,result)=>{
        if(err){
          throw err;
        }
        console.log(result);
        res.send('SucessFull');
      })
    }catch(err){
      console.log(err);
      res.send("error occure")
    }
});

app.listen(8080,()=>{
  console.log('Server link http://localhost:8080');
})






  // insert data manually;
  // let qry = 'INSERT INTO users (ID,USERNAME,EMAIL,PASSWORD) VALUES  ? ';
  // let userS = [ 
  //               ['2','LEeey','leooO24@gmail.com','achaJIii4'] ,
  //               ['3','Panthom','pyt0nn@gmail.com','CHocoooO'] 
  //             ];
  
  //   connection.query(qry, [userS] ,(err,result)=>{
  //       console.log(result); 
  //       connection.end(); //IMPORTANT
  //   })





// let data =[];
// for(let i=0;i<100;i++){
//    data.push(fakeRandomUser())
// }
// let qry = 'INSERT INTO users (ID,USERNAME,EMAIL,PASSWORD) VALUES  ? ';
// connection.query(qry, [data] ,(err,result)=>{
//     if(err){
//       console.log(err);
//     }else{
//       console.log('insert sucessfully');
//     }

//     connection.end();
// })
