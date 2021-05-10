const express=require("express");
const app =express();
const port =3000;
app.use(express.json());
const users = [
    { name: "John", age: 25 },
    { name: "Jane", age: 20 },
    { name: "Mark", age: 19 },
  ];
  //Pulse Check
app.get("/users",(req,res)=>{
    res.status(200);
    res.json(users);
})


app.get("/user",(req,res)=>{
    const user =req.query.name;
    // req.json(user);
    
    let i;
    const found=users.find((elem,index)=>{
        i=elem;
        return elem.name===user
    })
    if(found){
        res.status(200);
         res.json(i)
    }else{
        res.status(404);
        res.json("user not found")
    }

})










app.listen(port ,()=>{
    console.log(` app listening at http://localhost:${port}`);
})