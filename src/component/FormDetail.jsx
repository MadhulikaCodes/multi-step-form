import React from 'react'

const FormDetail = ({formData}) => {
  return (
    <div className=" flex flex-col gap-2 items-center p-5 bg-slate-50 m-72 w-[60%]">
      <h1 className="text-2xl ">Success !</h1>
      <hr />
      <span>Name : {formData.name}</span>
      <br />
      <span>Email : {formData.email}</span>
      <br />
      <span>dob : {formData.date}</span>
      <br />
      <span>password : {formData.password}</span>
      <br />
    </div>
  );
}

export default FormDetail