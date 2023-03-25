import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        is:{
            type:String
        },
        name:{
            type:String,
        },
        rollno:{
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
        blood:{
            type:String,
        },
        bloodbank:{
            type:String,
        },
        phone:{
            type:String,
        },
        address:{
            type:String,
        }
    }
)


 const schema = mongoose.model("BloodDonation",userSchema);

 export default schema;