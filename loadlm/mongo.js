const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    company:{
        type:String,
        required:false
    },
    firstName:{
        type:String,
        required:false
    },
    lastName:{
        type:String,
        required:false
    },
    phone:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    address2:{
        type:String,
        required:false
    },
    city:{
        type:String,
        required:false
    },
    state:{
        type:String,
        required:false
    },
    zipCode:{
        type:String,
        required:false
    },
    freightOriginAddress:{
        type:String,
        required:false
    },
    freightOriginAddress2:{
        type:String,
        required:false
    },
    freightOriginCity:{
        type:String,
        required: false
    },
    freightOriginState:{
        type:String,
        required: false
    },
    freightOriginZipCode:{
        type:String,
        required: false
    },
    token: {
        type: String,
        required: false
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection