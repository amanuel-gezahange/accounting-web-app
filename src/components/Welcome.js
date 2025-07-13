"use client";
import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";
import Back from "./back/Back";

function Welcome() {
  const pathname = usePathname();
  const hideNavbar = pathname === "/";
  return (
    <div>
      {!hideNavbar ? (
        <>
          <Navbar />
          <Back />
        </>
      ) : null}
      <br />
    </div>
  );
}

export default Welcome;
