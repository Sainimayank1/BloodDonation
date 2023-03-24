import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name:{
            type:String,
        },
        roolno:{
            type:String,
        },
        branch:{
            type:String,
        },
        year:{
            type:String,
        },
        gender:{
            type:String,
        },
        hostler:{
            type:String,
        },
        blood:{
            type:String,
        },
        phone:{
            type:String,
        },
        addres:{
            type:String,
        }
    }, {timestamps:true}
)


 const schema = mongoose.model("Donated",userSchema);

 export default schema;