import express from "express";
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import cors from "cors";
import connect from './config/connect.js'
import Donated from "./model/Donated.js"

const postComment = async (req , res) => {
  try {
    const {postId,comment,userName}=req.body;
    const response = await Comment.create({postId,comment,userName})
    if(response)
        return res.status(200).json({msg:"Your comment Succesfully Post"});

  } catch (error) {
    return res.status(500).json({error});
  }
}

export default postComment

const app = express()
const port = 8000

dotenv.config()
app.use(cors())
app.use(bodyParser.json());

connect();

app.post('/donated', async(req, res) => {
  const data = req.body;
  try {
        const response  = await Donated.create(data);
        if(response)
          res.status(200).json({msg:"Data submit Succesfully"});
  } catch (error) {
      res.status(400).json({error:error});
  }
})

app.listen(process.env.PORT, () => console.log("Server is running :" + process.env.PORT))