const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://rithinroy27:rithinroy27@cluster0.quzazsk.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB connected")})
.catch(err=>console.log(err));

let sa=mongoose.Schema;
const routeschema=new sa(
    {
        rte:String,
        from:String,
        to:String,
        price:String,
        status:String
    }
);
var routemodel=mongoose.model("subcat",routeschema)
module.exports=routemodel;