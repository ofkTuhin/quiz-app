import React from "react";
import Button from "./Button";
import CheckBox from "./CheckBox";
import Form from "./Form";
import TextInput from "./TextInput";

const SignupForm = () => {
  return (
    <Form styles={{ height: "500px" }}>
      <TextInput type="text" placeholder="Enter name" icon="person" />
      <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
      <TextInput type="text" placeholder="Enter Password" icon="lock" />
      <TextInput type="text" placeholder="Confirm Password" icon="lock_clock" />
      <CheckBox text=" I agree to the Terms & Conditions" />
      <Button>
        {" "}
        <span>Submit now</span>
      </Button>
      <div class="info">
        Already have an account? <a href="login.html">Login</a> instead.
      </div>
    </Form>
  );
};

export default SignupForm;
