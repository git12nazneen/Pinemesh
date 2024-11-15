"use client";
import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen ">
     {/* <Container> */}
     <div>{children}</div>
     {/* </Container> */}
    </div>
  );
};

export default AuthLayout;
