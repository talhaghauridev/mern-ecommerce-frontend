import React, { useState } from "react";
import { Input, Meta } from "../../../components";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // useLogin(user);
  };
  return (
    <>
      <Meta title={"Login"} />
      <section id="login">
        <div className="container">

          <div className="form_heading">
            <h1>
              Login
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="form">
            {/* Email Input  */}
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              value={user.email}
            />

            {/* Password Input  */}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              value={user.password}
            />
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
