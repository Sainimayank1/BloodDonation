import React from "react";
import "./Form.css";
const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <>
      <form>
        <div class="container">
          <center>
            <h1>  Registration Form For Blood Donation </h1>
          </center>
         <label> First Name:- </label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter your Name"
            size="15"
            required
          /> 
          <label> College-id/ Roll-no </label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter id"
            size="15"
            required
          /> 
          <label> Branch/ Year </label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter Branch and Year"
            size="15"
            required
          /> 
             <div>
            <label>Gender : </label>
            <input type="radio" value="Male" name="gender" /> Male
            <input type="radio" value="Female" name="gender" /> Female
            <input type="radio" value="Other" name="gender" /> Other
          </div>
          <label>Blood Group </label>
          <input
            type="text"
            name="firstname"
            placeholder="Enter blood group"
            size="15"
            required
          /> 
           <label>Blood Group (PGI/RED CROSS) </label>
          <input
            type="text"
            name="bloodgroup"
            placeholder="Enter PGI/ RED Cross"
            size="15"
            required
          /> 
          <label>Current Address:-</label>
          <textarea name="Current address" rows="10" cols='80'  className='text-area'/>
            <button type="submit" class="registerbtn">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
