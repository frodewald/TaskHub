import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import useIntersectionObserver from "../hooks/useIntersectionObserver"; // Impor hook

const HeroSection = () => {
  const [titleRef, isTitleVisible] = useIntersectionObserver();
  const [videoRef, isVideoVisible] = useIntersectionObserver();

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 ref={titleRef} className={`observe ${isTitleVisible ? "animate-fade-up animate-once" : "opacity-0"} text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide px-10`}>
        Solusi Cerdas untuk
        <span className='bg-gradient-to-r from-blue-700 to-secondaryDarkColor text-transparent bg-clip-text'>
          {" "}Manajemen Proyek Anda
        </span>
      </h1>
      <p className='mt-10 text-lg text-center max-w-4xl'>Atur, pantau, dan selesaikan proyek lebih cepat dengan alat kolaborasi modern kami. Ciptakan efisiensi dalam tim Anda, dari awal hingga akhir proyek.</p>
      <div className="flex justify-center my-10">
        <a href="#pricing" className='bg-blue-800 py-3 px-4 mx-3 rounded-md text-white'>
          Start for free
        </a>
      </div>
      <div className='flex mt-10 justify-center' ref={videoRef}>
        <video
          autoPlay loop muted
          className={`${isVideoVisible ? "animate-fade-right animate-once" : "opacity-0"} rounded-lg w-1/2 border bg-blue-800 mx-2 my-4`}
        >
          <source src={video1} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay loop muted
          className={`${isVideoVisible ? "animate-fade-left animate-once" : "opacity-0"} rounded-lg w-1/2 border bg-blue-800 mx-2 my-4`}
        >
          <source src={video2} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
