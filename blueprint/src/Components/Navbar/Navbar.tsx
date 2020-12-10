import React from "react";
import Menu from "../mixins/Menu";
import Link from "next/link";
interface Props {
  mainState?: boolean;
  login?: boolean;
}

const Navbar: React.FC<Props> = (props) => {
  return (
    <div className="fixed top-1 z-50 h-20 w-full m-auto text-xl content-center justify-between items-center ">
      <div className="text-blue-500 ml-5">
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <div className="flex">
        {props.mainState && (
          <>
            <Menu menuName="Doc" target="#" />
            {!props.login && (
              <>
                <Menu menuName="Sign In" target="signin" />
                <Menu menuName="Sign Up" target="signup" />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
