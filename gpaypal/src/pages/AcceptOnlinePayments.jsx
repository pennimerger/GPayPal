import React from "react";
import Hero from "./components/onlinepayments/Hero";
import Checkout from "./components/onlinepayments/Checkout";
import Section3 from "./components/onlinepayments/Section3";
import Tabs from "./components/onlinepayments/Tabs";
import Section5 from "./components/onlinepayments/Section5";
import CTA from "./components/onlinepayments/CTA";

function AcceptOnlinePayments() {
  return <>
    <Hero />
    <Checkout />
    <Section3 />
    <Tabs />
    <Section5 />
    <CTA />
  </>
}
export default AcceptOnlinePayments