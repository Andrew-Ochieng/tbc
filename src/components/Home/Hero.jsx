import { Link } from "react-router-dom";
// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/react-splide/css';
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
import about3 from "../../assets/about3.jpg"
import about4 from "../../assets/about4.jpg"
import { useState, useEffect } from "react";
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs'


const Hero = () => {
    const images = [
        {url: about1},
        {url: about2},
        {url: about3},
        {url: about4},
    ]

    const [current, setCurrent] = useState(0)
    const length = images.length

    useEffect(() => {
        const timeout = setTimeout(() => {
          setCurrent(current === length - 1 ? 0 : current + 1)
        }, 5000)
        return () => clearTimeout(timeout)
      }, [current, length])

      if (!Array.isArray(images) || images.length <= 0) {
        return null
      }
    

    return ( 
        <>
            <div className="md:pb-24">
                <div className="bg-gray-700 opacity-70">
                    {images.map((image, index) => (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img
                                        src={image.url} 
                                        alt="hero-image" 
                                        className="lg:min-h-screen sm:h-[500px] h-[350px] w-full object-cover"
                                    />
                                )}
                            </div>
                        )
                    )}
                </div>
                <div className="mt-0 hero lg:min-h-screen md:h-[400px] h-[270px] absolute md:top-[110px] top-[100px]">
                    <div className="md:hero-content px-4 text-center">
                        <div className="max-w-lg md:z-[0] z-[100] text-white">
                            <h1 className="md:text-5xl text-3xl font-bold ">Welcome to our Worship Services</h1>
                            <p className="py-6 md:text-lg text-sm">We exist to glorify God through the preaching and teaching of the Bible with the aim that sinners will be saved and that saints will grow to Christian maturity.</p>
                            <Link to='/contact' className="btn btn-info">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default Hero;