import React from "react";
import SignUp from "./components/homepage/SignUp";
import Hero from "./components/personal/Hero";
import Section2 from "./components/personal/Section2";
import Section3 from "./components/personal/Section3";
import SendPayments from "./components/personal/SendPayments";
import RequestPayments from "./components/personal/RequestPayments";
import BuyOnline from "./components/personal/BuyOnline";
import BuySellEbay from "./components/personal/BuySellEbay";

function Homepage() {
  return (
    <>
      <Hero />
      <Section3 />
      <SignUp />
    </>
  )
}

export default Homepage