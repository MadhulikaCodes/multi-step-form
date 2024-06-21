import React from 'react'

const Form = ({ form, handleSubmit, handleChange, index, formData }) => {
  return (
    <form onSubmit={handleSubmit} className="m-2 flex flex-col gap-2 ">
      <p className="text-2xl">{form[index].value} :</p>
      <input
        name={form[index].id}
        type={form[index].type}
        placeholder={form[index].placeholder}
        value={formData[form[index].id] || ""}
        onChange={handleChange}
        className="m-1 p-1 rounded-lg"
      />
      <button
        type="submit"
        className="bg-slate-200 rounded-md p-2 hover:bg-slate-300"
      >
        {form[index].button}
      </button>
    </form>
  );
};

export default Form