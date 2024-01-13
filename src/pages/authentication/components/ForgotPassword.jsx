import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"ForgotPassword"} />
      <section id="forgotPassword">
        <div className="container">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
