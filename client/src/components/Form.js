import React, { useState } from "react";
import Loader from "./Loader/Loading.js"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import "./Form.css";
const Form = () => {
  const [formValue,setvalue] = useState(
    {
      name:"",
      roolno:"",
      branch:"",
      year:"",
      gender:"",
      blood:"",
      socicety:"",
      phone:"",
      addres:""
  }
  )

  const [loading,setLoading] = useState(false);

  const handleChange = (e) =>
  {
    const {name , value} = e.target;
    setvalue({...formValue ,[name]:value  });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/donated',formValue)
      setLoading(false);
      if(response)
      {
        toast(response.data.msg);
      }
  } catch (error) {
      toast(error)
  }
  };

  const AllPosts = async () =>
  {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/TotalPeople')
      setLoading(false);
      console.log(response.data.people)
  } catch (error) {
      toast(error)
  }
  }



  return (
    <>
      <form onSubmit={handleSubmit}>
      { loading ? <Loader/> :
      <>
      <Toaster />
        <div class="container">
        <div className="container-sub">
          <center>
            <h1>  Registration Form For Blood Donation </h1>
          </center>
           <div className="fl">
             <label>Student</label>
             <input type="checkbox"  className="larger"/>
             <label>Teaching</label>
             <input type="checkbox" className="larger"/>
             <label>Non-Teaching</label>
             <input type="checkbox" className="larger" />
             <label>Guest</label>
             <input type="checkbox" className="larger" />
        </div>
         <label> First Name:- </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            size="15"
            onChange={handleChange}
          /> 
          <label> College-id/ Roll-no </label>
          <input
            type="text"
            name="roolno"
            placeholder="Enter id"
            size="15"
            onChange={handleChange}
          /> 
          <label> Branch</label>
          <input
            type="text"
            name="branch"
            placeholder="Enter Branch"
            size="15"
            onChange={handleChange}
          /> 
           <label> Year</label>
          <input
            type="text"
            name="year"
            placeholder="Enter Year"
            size="15"
            onChange={handleChange}
          /> 
          <div>
            <label>Gender : </label>
            <input type="radio" value="Male" name="gender" onChange={handleChange}/> Male
            <input type="radio" value="Female" name="gender" onChange={handleChange}/> Female
            <input type="radio" value="Other" name="gender" onChange={handleChange}/> Other
          </div>
          <label>Blood Group </label>
          <input
            type="text"
            name="blood"
            placeholder="Enter blood group"
            size="15"
            onChange={handleChange}
          /> 
           <label>(PGI/RED CROSS) </label>
          <input
            type="text"
            name="socicety"
            placeholder="Enter PGI/ RED Cross"
            size="15"
            onChange={handleChange}
          /> 
          <label>Phone No</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone No"
            size="15"
            onChange={handleChange}
          /> 
          <label>Current Address:-</label>
          <textarea name="addres" rows="10" cols='70'  className='text-area' onChange={handleChange}/>
            <button type="submit" class="registerbtn">Submit</button>
        </div>
        </div>
      <span onClick={AllPosts}>Please Don't click</span>
      </>
      }
      </form>
    </>
  );
};

export default Form;
