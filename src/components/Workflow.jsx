import { CheckCircle2 } from "lucide-react"
import taskImg from '../assets/task.jpg'
import { checklistItems } from "../constants"
import useIntersectionObserver from "../hooks/useIntersectionObserver"

const Workflow = () => {
  const [Workflow, isWorkflowVisible] = useIntersectionObserver();

  return (
    <div className="mt-20" id="workflow" ref={Workflow}>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">Mempercepat
       <span className="bg-gradient-to-r from-blue-700 to-secondaryDarkColor text-transparent bg-clip-text">{" "}Alur Kerja</span>
       {" "}Anda 
      </h2>
      <div className="flex flex-wrap justify-center mt-10 items-center">
        <div className="p-2 w-full h-full lg:w-1/2">
          <img src={taskImg} alt="Code" className={`object-cover *
            ${isWorkflowVisible ? 'animate-fade-right' : 'opacity-0'}  
          `} />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className={`flex mb-12
              ${isWorkflowVisible ? (
                index === 0 ? 'animate-fade-left animate-delay-100' :
                index === 1 ? 'animate-fade-left animate-delay-200' :
                index === 2 ? 'animate-fade-left animate-delay-300' :
                index === 3 ? 'animate-fade-left animate-delay-500' :
                index === 4 ? 'animate-fade-left animate-delay-700' : 'animate-fade-left animate-delay-0'
              ) : 'opacity-0'}
            `}>
              <div className={`text-blue-400 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full border border-gray-400`}>
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Workflow