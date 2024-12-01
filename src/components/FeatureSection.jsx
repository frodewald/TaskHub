import { features } from "../constants";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

const FeatureSection = () => {
  const [elementRef, isVisible] = useIntersectionObserver();
  
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]" id="features">
      <div className="text-center">
        <span className="section-title">
          fitur
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide px-10">
          Mempermudah Pengaturan
          <span className="bg-gradient-to-r from-blue-700 to-secondaryDarkColor text-transparent bg-clip-text">{" "}Tugasmu</span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} ref={elementRef} className={`w-full sm:w-1/2 lg:w-1/3 observe ${isVisible ? 
                (index === 0 || index === 3 ? "animate-fade-right" :
                index === 2 || index === 5 ? "animate-fade-left" :
                index === 1 ? "animate-fade-down" :
                index === 4 ? "animate-fade-up" : "animate-fade-up") 
                : "opacity-0"}`}>
            <div className={`flex`}>
              <div className="flex mx-6 h-10 w-10 p-2 text-blue-700 justify-center items-center border border-gray-400 rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureSection;