import { useState } from "react";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component"
import FormInput from "../../form-input/form-input.component"
import Button from "../../button/button.component"
import "./sign-in-form.styles.scss"

const defaulFormFields = {
    email: "",
    password: "",
  };

function SignIn() {
    const [formFields, setFormFields] = useState(defaulFormFields);
    const { email, password } = formFields;
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
  
    return (
      <div className="sign-in-container">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={() => {}}>
          <FormInput
            label="Email"
            inputOptions = {{
              type: "email",
              required: true,
              name: email,
              value: email,
              onChange: handleChange
            }}
          />
          <FormInput
            label="Password"
            inputOptions = {{
              type: "password",
              required: true,
              name: password,
              value: password,
              onChange: handleChange
            }}
          />
          <div class="buttons-container">
            <Button type="submit">Sign in</Button>
            <Button buttonType="google">Google Sign In</Button>
          </div>
        </form>
      </div>
    );
  }
  
  export default SignIn;
  