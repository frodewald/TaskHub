import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20" id="pricing">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 ">
        <span className="bg-gradient-to-r from-blue-700 to-secondaryDarkColor text-transparent bg-clip-text">
          Pricing
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pricingOptions.map((option, index) => (
          <div key={index} className="p-10 flex flex-col h-full border border-neutral-700 rounded-xl">
            <div className="flex flex-col items-start justify-between flex-grow w-full">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Pro" && <span className="bg-gradient-to-r from-blue-700 to-secondaryDarkColor text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}
              </p>
              <p className="mb-8 flex flex-wrap">
                <span className="text-5xl mt-6 mb-2 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight flex items-end justify-center mb-2">/Month</span>
              </p>
              <ul className="flex-grow">
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-blue-400 border border-blue-900 rounded-lg transition duration-200"> 
              Subscribe
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing