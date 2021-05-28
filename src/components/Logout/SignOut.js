import React from "react";
import { useHistory } from "react-router-dom";

export const SignOut = (e) => {
  const history = useHistory();

  e.preventDefault();
  localStorage.clear();
  history.push("/");
};
