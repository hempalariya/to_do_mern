import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import WrapCard from "../components/WrapCard";
import Input from "../components/Input";

export default function Login() {
  const [cred, setCred] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });
  }

  async function handleLoginUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cred),
    });
    const data = await response.json();
    localStorage.setItem("user", JSON.stringify(data));
    navigate("/dashboard");
  }

  console.log(cred);

  return (
    <WrapCard>
      <form onSubmit={handleLoginUser}>
        <Input
          onChange={handleChange}
          label={"Email"}
          labelFor={"email"}
          id={"email"}
          name={"email"}
          type={"email"}
        />

        <Input
          onChange={handleChange}
          label={"Password"}
          labelFor={"password"}
          id={"password"}
          name={"password"}
          type={"password"}
        />

        <Button>Login</Button>
      </form>
    </WrapCard>
  );
}
