import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import PasswordInput from "../molecules/PasswordInput";
//import { Link } from "react-router-dom";
import LinkPage from "../atoms/LinkPage";

function LoginFormOrganism() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    // Add additional form submission logic here
  };

  return (
    <form
      className="flex flex-col items-center w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-full mb-4">
        <Input
          type="email"
          name="email"
          placeholder="  Email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div className="flex flex-col w-full mb-4">
        <PasswordInput
          name="password"
          placeholder="  Password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div className="flex justify-evenly w-full max-w-md mt-14">
        <LinkPage text="Register" link="/registerpage"/>
        <Button type="submit" label="Login" />
      </div>
    </form>
  )
}

export default LoginFormOrganism
