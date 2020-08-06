import React, { useState } from "react";
import Head from "./Center/Head";
import Body from "./Center/Body";
import Tail from "./Center/Tail";

const Center: React.FC = (props) => {
  const [docName, setDocName] = useState<String | null>(null);
  return (
    <div className="w-7/12 bg-red-300">
      <Head />
      <Body />
      <Tail />
    </div>
  );
};

export default Center;
