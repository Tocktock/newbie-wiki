import React, { useState, useEffect } from "react";

interface UserInfo {
  username: string;
  jwt: string;
}

const useUser = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
};

export default useUser;
