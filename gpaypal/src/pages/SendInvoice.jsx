import React from "react";
import Hero from "./components/invoices/Hero"
import Section2 from "./components/invoices/Section2"
import HowItWorks from "./components/invoices/HowItWorks"
import SendingInvoices from "./components/invoices/SendingInvoices"
import Convert from "./components/invoices/Convert"
import GetPaid from "./components/invoices/GetPaid";

function SendInvoice() {
    return <>
        <Hero />
        <Section2 />
        <HowItWorks />
        <SendingInvoices />
        <Convert />
        <GetPaid />
    </>
}

export default SendInvoice