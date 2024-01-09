import React from "react";
import Input from "../../components/ui/Input";

const Home = () => {
  return (
    <div>
      <Input name={"name"} type={"text"} placeholder={"Please Enter Your Name"} onChange={(e) => console.log(e.target.value)} label={"Name"} />
      <Input name={"email"} type={"text"} placeholder={"Please Enter Your email"} onChange={(e) => console.log(e.target.value)} label={"Email"} />
      <Input name={"password"} type={"password"} placeholder={"Please Enter Your password"} onChange={(e) => console.log(e.target.value)} />

    </div>
  );
};
export default Home;
