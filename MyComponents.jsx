import React, { useState } from "react";

function MyComponents() {
  const [name, setName] = useState("Guest");
  const [surname, setSurname] = useState("Guest");
  const [password, setPassword] = useState("*****");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("*****");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordMatchError, setPasswordMatchError] = useState("");

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);
    setNameError(value.length < 2 ? "Name must be at least 2 characters" : "");
  };

  const handleSurname = (e) => {
    const value = e.target.value;
    setSurname(value);
    setSurnameError(value.length < 2 ? "Surname must be at least 2 characters" : "");
  };

  const handleMail = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(value.length < 5 ? "Email must be at least 5 characters" : "");
  };

  const handlePass = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordError(value.length < 8 ? "Password must be at least 8 characters" : "");
    if (value !== password1) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError("");
    }
  };

  const handlePass1 = (e) => {
    const value = e.target.value;
    setPassword1(value);
    if (password !== value) {
      setPasswordMatchError("Passwords do not match");
    } else {
      setPasswordMatchError("");
    }
  };

  return (
    <div className="div">
      <div>
        <input type="text" placeholder="Name" onChange={handleName} />
        {nameError ? <p style={{ color: "red" }}>{nameError}</p> : ""}
      </div>
      <div>
        <input type="text" name="" id="" placeholder="Surname" onChange={handleSurname} />
        {surnameError ? <p style={{ color: "red" }}>{surnameError}</p> : ""}
      </div>
      <div>
        <input type="email" placeholder="Email" onChange={handleMail} />
        {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
      </div>
      <div>
        <input type="password" placeholder="Password" onChange={handlePass} />
        {passwordError ? <p style={{ color: "red" }}>{passwordError}</p> : ""}
      </div>
      <div>
        <input type="password" placeholder="Confirm Password" onChange={handlePass1} />
        {passwordMatchError ? <p style={{ color: "red" }}>{passwordMatchError}</p> : ""}
      </div>
      <br />
      <p>Name: {name}</p>
      <p>Surname: {surname}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Password: {password1}</p>
    </div>
  );
}

export default MyComponents;
