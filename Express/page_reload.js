const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.status(200).send('hello')
})
const check=(req,res,next)=>{
    if(id==10||id=="10"){
        console.log('user');
        next();
    }
}

app.get('/user/:Userid/book/:bookUserid',check,(req,res)=>{
   
    const user_url_id=req.params.Userid
;
   const book_url_id=req.params.bookid;
    res.send(`${user_url_id}is valid,bookid${book_url_id}`)
})


app.listen(7070);