const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://rithinroy27:rithinroy27@cluster0.quzazsk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let ca=mongoose.Schema;
const buseschema=new ca(
    {
        busn:String,
        busm:String,
        ac:String,
        seatn:String,
        image1:{
            data:Buffer,
            contentType:String,
        }
    }
);
var busemodel=mongoose.model("cat",buseschema)
module.exports=busemodel;