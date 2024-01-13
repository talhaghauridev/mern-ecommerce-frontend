import React from "react";

const SignUp = () => {
  return (
    <>
      <>
        <Meta title={"SignUp"} />
        <section id="signup">
          <div className="container">
            <Input
              label="Name"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              name="password"
            />
          </div>
        </section>
      </>
    </>
  );
};

export default SignUp;
