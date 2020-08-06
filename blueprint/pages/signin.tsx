import SignIn from "../src/Components/SignIn";
import NavBar from "../src/Components/Navbar";
import Link from "next/link";
const SignInPage = () => {
  return (
    <>
      <NavBar mainState={false} login={false} />
      <SignIn />
    </>
  );
};

export default SignInPage;
