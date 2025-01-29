const express=require("express");
const app=express();
const mongoose=require("mongoose");
const path=require("path");

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
mongoose.connect("mongodb://127.0.0.1:27017/crud_1");

const table=mongoose.Schema({
    name:String,
    age:Number,
    pwd:String
})

const MyTable=mongoose.model('tables',table);

app.get('/',async(req,res)=>{
    const rev=await MyTable.find().lean();
    const records=rev.reverse();
    res.render(path.join(__dirname,'ejs','list'),{records});
})


app.get('/about',(req,res)=>{
    res.send("I am About");
})


app.get('/add',(req,res)=>{
    res.sendFile(__dirname+'/add.html');
})


app.post('/submit',(req,res)=>{

    const add=new MyTable({
        name:req.body.name,
        age:req.body.age,
        pwd:req.body.pwd,
    })
    add.save();
    res.redirect('/');
})
app.listen(8080);