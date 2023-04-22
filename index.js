const app= require('./Routes/app');
const port= 3000;


app.use((req,res)=>{
    res.send("404!!! page Note Found");
});


app.listen(port,(req,res)=>{

    console.log(`Server Run Success at http://localhost:${port}`);
});