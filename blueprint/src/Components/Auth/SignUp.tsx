import React from "react";
import SignUpForm from "./mixins/SignUpForm";

const SignUp: React.FC = (props) => {
  return (
    <div className="container mx-auto flex mt-40 flex-col items-center">
      <SignUpForm />
    </div>
  );
};

export default SignUp;
