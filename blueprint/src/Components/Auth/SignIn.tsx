import React from "react";
import SignInForm from "./mixins/SignInForm";

const SignIn: React.FC = (props) => {
  return (
    <div className="container mx-auto flex mt-40 flex-col items-center">
      <SignInForm />
    </div>
  );
};

export default SignIn;
