const fs=require("fs");
const biodata={
    name:"Ali",
    age:26,
    channel:"Youtube"
};
// console.log(biodata.channel);
// const jsonData=JSON.stringify(biodata);
// console.log(jsonData);
// const objData=JSON.parse(jsonData);
// console.log(objData);

const jsonData=JSON.stringify(biodata);
// fs.writeFile("json1.json",jsonData,(err)=>{
//     console.log("done");
// });

fs.readFile("json1.json","utf-8",(err,data)=>{
    // console.log(data);
    const orgData=JSON.parse(data);
    console.log(data);
    console.log(orgData);
})
