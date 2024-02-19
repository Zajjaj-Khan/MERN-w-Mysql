import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string().min(3).max(7).required(),
    password: Yup.string().min(6).max(7),
  });
  const onhandle = async (data) => {
  
    await axios.post("http://localhost:3001/auth", data).then((response) => {
      console.log("Your registration was successful");
    });
  };
  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onhandle}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field name="username" placeholder="Username..."  id="inputCreatePost"/>
          <label>password:</label>
          <ErrorMessage name="password" component="span" />
          <Field name="password" placeholder="password..." type="password"  id="inputCreatePost"/>
          <button type="submit">Registor</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
