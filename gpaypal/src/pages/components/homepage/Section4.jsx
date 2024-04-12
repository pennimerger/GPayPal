import React, { useState } from "react"
import { getImageUrl } from "../../../utils/image-util.jsx"

const buyers1 = getImageUrl('buyonline_browser1.png');
const buyers2 = getImageUrl('buyonline_browser2.png');
const buyers3 = getImageUrl('buyonline_browser3.png');

function Section4() {
  const [value, setValue] = useState(true)

  return (
    <>
      <div className="max-w-6xl mx-auto px-8 py-10 lg:py-20">
        <h2 className="text-center mb-8 text-2xl font-light lg:text-5xl lg:mb-16 text-slate-700">PayPal connects buyers and sellers.</h2>

        <ul className="flex items-center justify-center">
          <li>
            <button className="py-2 px-8">For buyers</button>
          </li>
          <li>
            <button className="py-2 px-8">For sellers</button>
          </li>
        </ul>

        {value && <Buyers />}

        {!value && <Sellers />}
      </div>
    </>
  )
}

function Buyers() {
  return <>
    <div className="flex flex-col">
      <article>
        <img src={buyers1} alt="" className="mx-auto" />
        <p>
          <span className="py-3 px-6 inline-block mr-4 rounded-full border border-slate-500">1</span>
          Sign up with just an email address and password.
        </p>
      </article>
      <article>
        <img src={buyers2} alt="" className="mx-auto" />
        <p>
          <span className="py-3 px-6 inline-block mr-4 rounded-full border border-slate-500">2</span>
          Securely add your cards.
        </p>
      </article>
      <article>
        <img src={buyers3} alt="" className="mx-auto" />
        <p>
          <span className="py-3 px-6 inline-block mr-4 rounded-full border border-slate-500">3</span>
          Use the PayPal button to check out with just an email address and password.
        </p>
      </article>
    </div>
  </>
}

function Sellers() {
  return <>Sell</>;
}

export default Section4