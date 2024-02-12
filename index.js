const express=require("express")
const cors=require("cors")
const multer=require('multer');
const storage=multer.memoryStorage();
const upload=multer({storage:storage});
// const CategoryRouter = require('./routes/Categoryroutes')
// const SubcateRouter = require('./Routes/Subcateroutes')
// const db = require("./Connection/Database")



const app=new express();
const busemodel=require('./model/Busdetails')
const routemodel=require('./model/Routedetails')

app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());

app.listen(3005,(request,response)=>{
    console.log("port is running in 3005")

})

// app.use("/c", CategoryRouter)

// app.use("/s", SubcateRouter)


app.get('/',(request,response)=>{
    response.send("hai")

})
// app.post('/new',(request,response)=>{
//     console.log(request.body)
//     new busemodel(request.body).save();
//     response.send("Record Successfully Saved")

// })
app.post('/cnew',(request,response)=>{
    console.log(request.body)
    new routemodel(request.body).save();
    response.send("Record Successfully Saved")

})
app.get("/categoryview",async(request,response)=>{
    var data=await busemodel.find();
    response.send(data);
});

app.get("/subview",async(request,response)=>{
    var data=await routemodel.find();
    response.send(data);
});


app.get('/view',async(request,response)=>{
    var data=await busemodel.find();
    console.log(data)
    response.send(data)
});
app.get('/views',async(request,response)=>{
    var data=await routemodel.find();
    response.send(data)
});

app.put('/edit/:id',async(request,response)=>{
    let id=request.params.id
    await busemodel.findByIdAndUpdate(id,request.body)
    response.send("Data uploaded")
});
app.put('/edits/:id',async(request,response)=>{
    let id=request.params.id
    await routemodel.findByIdAndUpdate(id,request.body)
    response.send("Data uploaded")
})
app.post('/new',upload.single('image1'),async (request,response) => {
    try {
        const { busn,busm,ac,seatn} = request.body
        const newdata = new busemodel({
            busn,busm,ac,seatn,
            image1: {
                data:request.file.buffer,
                contentType: request.file.mimetype,}
        })
        console.log(newdata);
        await newdata.save();
        response.status(200).json({ message: 'Record saved' });

    }
    catch (error) {
        response.status(500).json({ error: 'Internal Server Error' });

    }

})