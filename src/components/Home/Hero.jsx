import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about2.jpg"
import about3 from "../../assets/about3.jpg"
import about4 from "../../assets/about4.jpg"

const Hero = () => {
    const slides = [
        {image: about1},
        {image: about2},
        {image: about3},
        {image: about4},
    ]

    return ( 
        <>
            <div className="md:pb-24">
                <Splide 
                        className="bg-gray-800 opacity-90 w-full md:h-[500px] h-[250px] bg-cover"
                        options={{
                        type: "loop",
                        perPage: 1,
                        perMove: 1,
                        autoplay: true,
                        interval: 3000,
                        pauseOnHover: false,
                        pauseOnFocus: false,
                        arrows: false,
                        pagination: true,
                        drag: true,
                        }}
                        aria-label="Home Hero Carousel"
                    >
                        {slides.map((slide, index) => (
                            <SplideSlide key={index}>
                                <img src={slide.image} alt="slide" className="rounded-none lg:h-[650px] md:h-[400px] h-[250px] w-full" />
                            </SplideSlide>
                        ))}
                    </Splide>
                    <div className="hero lg:min-h-screen md:h-[400px] h-[250px] bg-gray-700 opacity-70 absolute md:top-[110px] top-[65px]" >
                        <div className="md:hero-content px-6 text-center">
                            <div className="max-w-lg md:z-[0] z-[100] text-white">
                                <h1 className="md:text-5xl text-2xl font-bold ">Welcome to our Worship Services</h1>
                                <p className="py-6 md:text-base text-sm">We exist to glorify God through the preaching and teaching of the Bible with the aim that sinners will be saved and that saints will grow to Christian maturity.</p>
                                <Link to='/about' className="btn btn-info ">
                                    About Us
                                </Link>
                            </div>
                        </div>
                    </div>
            </div>
            
        </>
     );
}
 
export default Hero;