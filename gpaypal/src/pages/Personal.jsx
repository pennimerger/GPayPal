import React from "react";
import SignUp from "./components/homepage/SignUp";
import Hero from "./components/personal/Hero";
import Section2 from "./components/personal/Section2";
import Section3 from "./components/personal/Section3";

function Personal() {
  return (
    <>
      <Hero />
      <Section2 />
      <Section3 />
      <SignUp />
    </>
  )
}

export default Personal