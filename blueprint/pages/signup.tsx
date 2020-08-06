import SignUp from "../src/Components/SignUp";
import NavBar from "../src/Components/Navbar";
import Link from "next/link";
const SignInPage = () => {
  return (
    <>
      <NavBar mainState={false} login={false} />
      <SignUp />
    </>
  );
};

export default SignInPage;
