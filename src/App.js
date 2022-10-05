import { useState } from 'react';
import FormInput from "./components/FormInput";
import "./App.css";

const App = () => {
  const [values, setValues] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  const inputs = [
    {
      id: 1,
      type: 'text',
      name: 'username',
      label: 'Username',
      placeholder: 'Username'
    },
    {
      id: 2,
      type: 'email',
      name: 'email',
      label: 'Email',
      placeholder: 'Email'
    },
    {
      id: 3,
      type: 'text',
      name: 'birthday',
      label: 'Birthday',
      placeholder: 'Birthday'
    },
    {
      id: 4,
      type: 'password',
      name: 'password',
      label: 'Password',
      placeholder: 'Password'
    },
    {
      id: 5,
      type: 'password',
      name: 'confirmPassword',
      label: 'Confirm Password',
      placeholder: 'Confirm Password'
    }
  ]

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  console.log(values)

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
