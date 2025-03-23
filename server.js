const express= require('express');
const path =require('path');
const app = express();
const port=3000;

const AppID=process.env.APP_NAME

app.use('/images',express.static(path.join(__dirname,'images')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    console.log(`request served by ${AppID}`);
});

app.listen(port,()=>{
    console.log(`${AppID} is running on port ${port}`);
});