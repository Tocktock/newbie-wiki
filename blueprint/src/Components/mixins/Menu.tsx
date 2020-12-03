import React from "react";
import Link from "next/link";

interface Props {
  menuName: string;
  target: string;
}

const Menu: React.FC<Props> = (props) => {
  return (
    <div className="menu m-5 text-white">
      <Link href={props.target}>
        <a>{props.menuName}</a>
      </Link>
    </div>
  );
};

export default Menu;
