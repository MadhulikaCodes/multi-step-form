import React, { useState } from "react";
import data from "./Data";
import FormDetail from "./component/FormDetail.jsx";
import Form from "./component/Form.jsx";

const App = () => {
  const [form, setForm] = useState(data);
  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (index >= form.length - 1) {
      setSubmit(true);
      console.log("Data Submitted Successfully", formData);
    } else {
      setIndex((idx) => idx + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleBack = (e) => {
    e.preventDefault();
    if (index <= 0) return;
    else {
      setIndex((idx) => idx - 1);
    }
  };

  return (
    <>
      {!submit && (
        <div className="mx-auto bg-slate-100 p-4 flex flex-col items-center gap-4 m-72 w-[60%]">
          {index !== 0 && (
            <div className="flex relative left-[-14%] justify-start text-blue-500">
              <button onClick={handleBack} className="flex-start  underline">
                back
              </button>
            </div>
          )}
          <Form
            form={form}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            index={index}
            formData={formData}
          />
        </div>
      )}
      {submit && <FormDetail formData={formData} />}
    </>
  );
};

export default App;
