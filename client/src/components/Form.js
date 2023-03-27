import React, { useState } from "react";
import Loader from "./Loader/Loading.js"
import toast, { Toaster } from 'react-hot-toast';
import axios from "axios"
import "./Form.css";
const Form = () => {
  const [formValue,setvalue] = useState(
    {
      is:"",
      name:"",
      rollno:"",
      branch:"",
      year:"",
      gender:"",
      blood:"",
      bloodbank:"PGI",
      phone:"",
      address:""
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
             <input type="radio" value="Student" onChange={handleChange} name="is" className="larger"/>Student   
             <input type="radio" value="Non-Teaching" onChange={handleChange} name="is" className="larger"/> Non-Teaching   
             <input type="radio"  value="Teaching" name="is" onChange={handleChange} className="larger" /> Teaching   
             <input type="radio" value="Guest" name="is" onChange={handleChange} className="larger" /> Guest   
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
            name="rollno"
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
          </div>
          <label>Blood Group </label>
          <input
            type="text"
            name="blood"
            placeholder="Enter blood group"
            size="15"
            onChange={handleChange}
          /> 
           <label >Blood Bank: </label>
          <select name="bloodbank" className="select" onChange={handleChange}>
            <option className="option" value="PGI">PGI</option>
            <option className="option" value="RED-CROSS">RED-CROSS</option>
          </select>
          <br></br>
          <label>Phone No</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone No"
            size="15"
            onChange={handleChange}
          /> 
          <label>Current Address(Guest Only)</label>
          <textarea name="address" rows="10" cols='70'  className='text-area' onChange={handleChange}/>
            <button type="submit" class="registerbtn">Submit</button>
        </div>
        </div>
      {/* <span onClick={AllPosts}>Please Don't click</span> */}
      </>
      }
      </form>
    </>
  );
};

export default Form;
