"use client";
import React from "react";
import Navbar from "./Navbar";
import { useSearchParams } from "next/navigation";

function Welcome() {
  const searchParams = useSearchParams();
  const isLoggedIn = searchParams.get("isLoggedIn"); 
  return <div>{isLoggedIn ? <Navbar /> : null}</div>;
}

export default Welcome;
