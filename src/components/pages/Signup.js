import React from "react";
import Form from "../Form";
import Illustration from "../Illustration";
import signupsstyles from "styles/signup.module.css";
import TextInput from "../TextInput";
import CheckBox from "../CheckBox";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="collumn">
        <Illustration />
        <Form className={signupsstyles.signup}>
          <TextInput type="text" placeholder="Enter name" icon="person" />
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="text" placeholder="Enter Password" icon="lock" />
          <TextInput
            type="text"
            placeholder="Confirm Password"
            icon="lock_clock"
          />
          <CheckBox text=" I agree to the Terms & Conditions" />
        </Form>
      </div>
    </>
  );
};

export default Signup;
