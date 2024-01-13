import React from "react";

const ResetPassword = () => {
  return (
    <>
      <Meta title={"Confirm Password"} />
      <section id="confirm_password">
        <div className="container">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Enter your confirm password"
            name="confirm_password"
          />
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
