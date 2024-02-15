import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
function CreatePost() {
  const intialValues = {
    title: "",
    post: "",
    username: "",
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string().required(),
    post: Yup.string().min(2).max(7).required(),
    username: Yup.string().min(3).max(7).required(),
  });
  const handleSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="createPostPage">
      <Formik
        initialValues={intialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <ErrorMessage name="title" component="span" />
          <Field id="inputCreatePost" name="title" placeholder="Title..." />

          <label>Username:</label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="Username..."
          />

          <label>Post: </label>
          <ErrorMessage name="post" component="span" />
          <Field
            id="inputCreatePost"
            name="post"
            placeholder="Post..."
            component="textarea"
            rows="4"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;