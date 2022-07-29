import React from "react";
import Form from "../Form";
import Illustration from "../Illustration";
import loginstyles from "styles/login.module.css";
import TextInput from "../TextInput";
import Button from "../Button";
import illustrarion from "assets/images/login.svg";

const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="collumn">
        <Illustration illustration={illustrarion} img="hi" />
        <Form className={loginstyles.login}>
          <TextInput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />
          <TextInput type="text" placeholder="Enter Password" icon="lock" />

          <Button>
            <span>Submit now</span>
          </Button>
          <div class="info">
            Don't have an account? <a href="signup.html">Sign up</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
