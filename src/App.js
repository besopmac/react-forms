import { useState, useRef } from "react";
import FormInput from "./components/FormInput";
import "./App.css";

const App = () => {
  //const [username, setUsername] = useState('');
  //const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput placeholder="Username" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Full Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
