import React from 'react'
import { useState } from "react";
import { Complete } from './Auto';
import { City } from './City';



function LoginForm () {
    const initialValues = {email: "", password: "",citySearch:""};
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const handleChange = (e) => { //getting the event
        const { name, value } = e.target; //getting the events name and value
        setFormValues({ ...formValues, [name]: value }); //updating formvalues with value from the value passed
      };


      const handleSubmit = (e) => { //getting the event 
        e.preventDefault(); //prevents getting page refreshed 
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    



//-->Validation
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }else if(values.email !== "prasanth@gmail.com")
        {errors.email ="Email Not Registered"
        } 

        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }else if(values.password !== "prasanth")
        {errors.password ="Wrong Password"
        } 
    return errors;
      };



  return (

    <React.Fragment>
    {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="successMessage">Logged in successfully</div>
      ) : ( "" )} 
  
      <form onSubmit={handleSubmit}>

     <h3>Login Form</h3>
  
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email} 
              onChange={handleChange}
     
            />
          <p>{formErrors.email}</p>
          <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            
            />
          <p>{formErrors.password}</p>
          <label>Search City </label>
          <Complete  />  {/*Auto Complete */}
         
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    <button type="submit">Login</button>
    </form>
    </React.Fragment>
  )
}

export {LoginForm} 



   /*    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]); */