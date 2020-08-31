import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import './AddNewBill.scss';

const addNewBill = () => {
    return (
    <Formik
      initialValues={{ name: '', amount: '', person1: '', person2: '' }}

      validationSchema={Yup.object({
        name: Yup
          .string()
          .min(3, "Must be minimum 3 characters")
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        amount: Yup
          .number("Enter a Number")
          .positive("The number has to be a positive number")
          .required('Required'),
        person1Name: Yup.string()
          .min(3, "Must be minimum 3 characters")
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        person2Name: Yup.string()
          .min(3, "Must be minimum 3 characters")
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        person1Percentage: Yup
          .number("Enter a Number")
          .positive("The number has to be a positive number")
          .required('Required'),
        person2Percentage: Yup
          .number("Enter a Number")
          .positive("The number has to be a positive number")
          .required('Required'),
      })}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className="myform">
          
        <label htmlFor="name"> Name of Bill </label>
        <Field className="field" name="name" type="text" />
        <div className="error">
            <ErrorMessage name="name" />
        </div>

        <label htmlFor="amount">Amount Paid</label>
        <Field className="field" name="amount" type="text" />
        <div className="error">
            <ErrorMessage name="amount" />
        </div>

        <label htmlFor="person1Name">Person 1 Name</label>
        <Field className="field" name="person1Name" type="text" />
        <div className="error">
            <ErrorMessage name="person1Name" />
        </div>

        <label htmlFor="person2Name">Person 2 Name</label>
        <Field className="field" name="person2Name" type="text" />
        <div className="error">
            <ErrorMessage name="person2Name" />
        </div>

        <label htmlFor="person1Percentage">Person 1 Percentage</label>
        <Field className="field" name="person1Percentage" type="text" />
        <div className="error">
            <ErrorMessage name="person1Percentage" />
        </div>
        
        <label htmlFor="person2Percentage">Person 1 Percentage</label>
        <Field className="field" name="person2Percentage" type="text" />
        <div className="error">
            <ErrorMessage name="person2Percentage" />
        </div>
        <button type="submit">Submit</button>

      </Form>
    </Formik>
    )
}
export default addNewBill;