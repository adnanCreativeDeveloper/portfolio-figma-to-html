"use client";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be at most 15 digits")
    .required("Phone number is required"),
  message: Yup.string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

export default function ClientContactForm() {
  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      console.log(values); // Log values for now, replace with your submission logic
      // Optionally, send data to an API or perform other actions here
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setSubmitting(false); // Allow form to be submitted again
    }
  };

  return (
    <Formik
      initialValues={{ email: "", phone: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div>
            <div>
              <label htmlFor='email'>Email</label>
              <Field
                className='w-full py-3 px-3 mt-1 border border-emerald-500 rounded-md outline-none text-primary placeholder:text-emerald-500'
                type='email'
                id='email'
                name='email'
                placeholder='Please enter your email'
              />
              <div className='h-5 text-red-500'>
                <ErrorMessage
                  name='email'
                />
              </div>
            </div>
            <div>
              <label htmlFor='phone'>Mobile</label>
              <Field
                className='w-full py-3 px-3 mt-1 border border-emerald-500 rounded-md outline-none text-primary placeholder:text-emerald-500'
                type='text' // Change type to 'text' for phone input
                id='phone'
                name='phone' // Change to 'phone' to match validation schema
                placeholder='Enter mobile'
              />
              <div className='h-5 text-red-500'>
                <ErrorMessage
                  name='phone'
                />
              </div>
            </div>
            <div>
              <label htmlFor='message'>Message</label>
              <Field
                as='textarea'
                className='w-full py-3 px-3 mt-1 border border-emerald-500 rounded-md outline-none text-primary placeholder:text-emerald-500 resize-none'
                rows={8}
                id='message'
                name='message'
                placeholder='Enter your message'
              />
              <div className='text-red-500'>
                <ErrorMessage
                  name='message'
                />
              </div>
            </div>
            <div>
              <button
                className='bg-lime-600 hover:bg-lime-800 group rounded-md w-full py-4 mt-5 drop-shadow-2xl shadow-accent duration-200 active:scale-95'
                type='submit'
                disabled={isSubmitting} // Disable button while submitting
              >
                Submit
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className='group-hover:translate-x-2 duration-200 pl-2'
                />
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
