import { Carousel, Typography, Button } from "@material-tailwind/react";
import { heroData } from "../../data/content";
import { Link } from "react-router-dom";
export default function Hero() {

  return (
    <Carousel 
        loop={true}
        transition={{ duration: 1.3, type: 'tween'}}
        >
        {heroData.map((item, index) => (
            <div key={index} className="relative h-full w-full">
                <img
                src={item.imageUrl}
                alt="image 1"
                className="h-screen w-full object-cover"
                />
                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
                    <div className="w-3/4 text-center md:w-2/4">
                        <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                        >
                        {item.title}
                        </Typography>
                        <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                        >
                            {item.content}
                        </Typography>   
                        <div className="flex justify-center gap-2">
                            <Link to='/contact'>
                                <Button size="lg" color="cyan" className="rounded-none">
                                    Find Us
                                </Button>
                            </Link>
                            <Link to='/about'>
                                <Button size="lg" color="white" variant="text" className="rounded-none">
                                    About Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        ))}    
    </Carousel>
  );
}