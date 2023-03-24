import mongoose from "mongoose";
mongoose.set('strictQuery', true);
const  connect = async () =>
{
    try {
        const res = await mongoose.connect(process.env.LINK)
        if (res)
            console.log("Connect to database")
    
    } catch (error) {
        console.log(error)
    }
}

export default connect;