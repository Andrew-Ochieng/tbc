import { Link } from "react-router-dom";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import about1 from "../../assets/about1.jpg"
import about2 from "../../assets/about5.jpg"
import about3 from "../../assets/gallery9.jpg"
import about4 from "../../assets/gallery11.jpg"

const Hero = () => {
    const images = [
        {url: about1},
        {url: about2},
        {url: about3},
        {url: about4},
    ]

    return ( 
        <>
            <div className="md:pb-24">
                <Splide
                    options={{
                    type: "loop",
                    perPage: 1,
                    perMove: 1,
                    autoplay: true,
                    interval: 3000,
                    pauseOnHover: false,
                    pauseOnFocus: false,
                    arrows: false,
                    pagination: false,
                    drag: true,
                    }}
                    aria-label="Home Hero Carousel"
                >
                    {images.map((image, index) => (
                        <SplideSlide 
                        className="lg:min-h-screen md:h-[400px] h-[280px] w-full"
                        key={index}>
                            <img src={image.url} alt="slide" className="lg:h-[650px] md:h-[400px] h-[280px] w-full object-cover" />
                        </SplideSlide>
                    ))}
                </Splide>
                <div className="hero lg:min-h-screen md:h-[400px] h-[280px] bg-gray-700 opacity-70 absolute md:top-[110px] top-[65px]" >
                    <div className="md:hero-content px-4 text-center">
                        <div className="max-w-lg md:z-[0] z-[100] text-white">
                            <h1 className="md:text-5xl text-2xl font-bold ">Welcome to our Worship Services</h1>
                            <p className="py-6 md:text-base text-sm">We exist to glorify God through the preaching and teaching of the Bible with the aim that sinners will be saved and that saints will grow to Christian maturity.</p>
                            <Link to='/contact' className="btn btn-info">
                                Reach Out
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
     );
}
 
export default Hero;