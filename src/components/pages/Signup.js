import React from "react";
import Form from "../Form";
import Illustration from "../Illustration";
import signupsstyles from "styles/signup.module.css";
import TextInput from "../TextInput";
import CheckBox from "../CheckBox";
import Button from "../Button";
import illustration from "assets/images/signup.svg";
const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="collumn">
        <Illustration illustration={illustration} />
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
          <Button>
            {" "}
            <span>Submit now</span>
          </Button>
          <div class="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
