import React from "react";
import Hero from "./components/sendpayments/Hero";
import WaysToPay from "./components/sendpayments/WaysToPay";
import ImageGrids from "./components/sendpayments/ImageGrids";

function SendPayments() {
  return <>
    <Hero />
    <WaysToPay />
    <ImageGrids />
  </>
}

export default SendPayments