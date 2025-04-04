import { useState } from "react";
import FormInput from "../../form-input/form-input.component"
import Button from "../../button/button.component"

const defaulFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

function SignUpForm() {
  const [formFields, setFormFields] = useState(defaulFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  console.log(formFields);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={() => {}}>
        <FormInput
          label="Display Name"
          inputOptions = {{
            type: "text",
            required: true,
            name: "displayName",
            value: displayName,
            onChange: handleChange,
          }}
        />
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
        <FormInput
          label="Confirm Password"
          inputOptions = {{
            type: "password",
            required: true,
            name: confirmPassword,
            value: confirmPassword,
            onChange: handleChange
          }}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;
