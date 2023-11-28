import { useFormik } from 'formik';
import React from 'react';

function Formik() {
    const init = {
        name:"",
        email:""
    }

    // const formik =useFormik({
    //     initialValues:init,
    //     onSubmit: (value)=>{
    //         console.log(value);
    //         console.log(value.name);
    //         console.log(value.email);
    //     } 
    // })
    const {handleChange,handleSubmit,values} =useFormik({
        initialValues:init,
        onSubmit: (value)=>{
            console.log(value);
            console.log(value.name);
            console.log(value.email);
        } 
    })

  return (
    <div>
      <h1>Formik Demo</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Name</label>
        <input type="text" name='name'onChange={handleChange} value={values.name}/>
        <br /><br />
        <label htmlFor="">Enter Email</label>
        <input type="text" name='email'onChange={handleChange} value={values.email}/>
        <br /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default Formik;
