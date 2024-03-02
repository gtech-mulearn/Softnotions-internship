import React , { useState } from 'react';
import { useForm } from 'react-hook-form';

function Form() {
    const [submitStatus, setSubmitStatus] = useState(''); 

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
          console.log(data);
            const response = await fetch('http://localhost:3001/api/users/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                setSubmitStatus('Form submitted!');
            } else {
                setSubmitStatus('Error submitting form.');
            }
        } catch (error) {
            setSubmitStatus(`Error submitting form. details - ${error}`);
        }
    }

    return (
        <div className="container mx-auto max-w-md p-4 bg-gray-100 rounded shadow-md my-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl font-bold text-center mb-4">User Registration</h2>
          <div className="flex mb-4 items-center">
            <label htmlFor="fullName" className="w-1/3 text-right mr-2">
              Full Name:
            </label>
            <input
              type="text"
              id="fullName"
              className="flex-1 px-3 py-2 rounded border focus:outline-none focus:border-blue-500 text-gray-700"
              {...register("fullName", {
                required: true,
                minLength: 2,
                maxLength: 25,
              })}
            /> 
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-2">
                {errors.fullName.type === "required" && "Full Name is required"}
                {errors.fullName.type === "minLength" && (
                  "Full Name cannot be shorter than 2 characters"
                )}
                {errors.fullName.type === "maxLength" && (
                  "Full Name cannot exceed 25 characters"
                )}
              </p>
            )}
          </div>
          <div className="flex mb-4 items-center">
            <label htmlFor="age" className="w-1/3 text-right mr-2">
              Age:
            </label>
            <input
              type="number"
              id="age"
              className="flex-1 px-3 py-2 rounded border focus:outline-none focus:border-blue-500 text-gray-700"
              {...register("age", { required: true, min: 18, max: 100 })}
            />
            {errors.age && (
              <p className="text-red-500 text-sm mt-2">
                {errors.age.type === "required" && "Age is required"}
                {errors.age.type === "min" && "Age must be at least 18"}
                {errors.age.type === "max" && "Age cannot exceed 100"}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded shadow-sm"
          >
            Submit
          </button>
          {submitStatus && <div>{submitStatus}</div>}
        </form>
      </div>
    );
}

export default Form;
