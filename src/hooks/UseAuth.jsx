import React, { use } from "react";
import { FirebaseAuthContext } from "../provider/FirebaseAuthContext";

const UseAuth = () => {
  const authInfo = use(FirebaseAuthContext);
  return authInfo;
};

export default UseAuth;
