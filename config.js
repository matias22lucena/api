const mongoose = require ('mongoose');
const dbconnect = () =>{
    mongoose.connect("mongodb://127.0.0.1:27017/producto", {}, (err,res)=>{
        if(!err){
            console.log("Conexion correcta")
        }
        else{
            console.log("Error de Conexion")
        }
    })
}

module.exports=dbconnect;