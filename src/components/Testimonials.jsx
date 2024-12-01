import { testimonials } from "../constants"
import useIntersectionObserver from "../hooks/useIntersectionObserver"

const Testimonials = () => {
const [testimonial, isTestimonialVisible] = useIntersectionObserver();
  return (
    <div className="mt-20 tracking-wide" id="testimonials">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">Apa yang 
        <span className="bg-gradient-to-r from-blue-700 to-secondaryDarkColor text-transparent bg-clip-text">{" "}Pelanggan Katakan</span>
      </h2>
      <div className="flex flex-wrap justify-center" ref={testimonial}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={`w-full sm:w-1/2 lg:w-1/3 px-4 py-2 ${isTestimonialVisible ? 'animate-jump' : 'opacity-0'}`}>
            <div className="bg-neutral rounded-md p-6 text-md border border-gray-400 shadow-sm shadow-gray-300 h-full font-normal flex flex-col justify-between">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-end">
                <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={testimonial.image} alt={testimonial.user} />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">{testimonial.company}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials