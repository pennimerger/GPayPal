import React from "react";
import { getImageUrl } from "../../../utils/image-util";

const freelancer = getImageUrl("freelancers/logo_freelancer.png")
const upwork = getImageUrl("freelancers/logo_upwork.png")
const fiverr = getImageUrl("freelancers/logo_fiverr.png")
const designs = getImageUrl("freelancers/logo_99designs.png")
const ifreelance = getImageUrl("freelancers/logo_ifreelance.png")
const guru = getImageUrl("freelancers/logo_guru.png")

function Looking() {
  return <>
    <section className="bg-slate-100 py-10 lg:py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-slate-800 font-light mb-8 text-4xl lg:text-5xl text-center">
          Looking for your next job?
        </h2>
        <p className="lg:text-lg mb-10 pb-4 border-dotted border-b border-slate-300 text-center">
          Leading freelancer platforms already allow you to get paid securely
          through your PayPal account
        </p>

        <div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 md:grid-cols-3">
            <li>
              <img src={freelancer} alt="" className="block mx-auto" />
            </li>
            <li>
              <img src={upwork} alt="" className="block mx-auto" />
            </li>
            <li>
              <img src={fiverr} alt="" className="block mx-auto" />
            </li>
            <li>
              <img src={designs} alt="" className="block mx-auto" />
            </li>
            <li>
              <img src={ifreelance} alt="" className="block mx-auto" />
            </li>
            <li>
              <img src={guru} alt="" className="block mx-auto" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  </>
}

export default Looking