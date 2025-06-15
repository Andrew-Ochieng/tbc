import React from 'react';
import { ChevronRight } from 'lucide-react';
import { heroCarouselData } from '../../data/homeData';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSplideOptions } from '../../utils/splideOptions';
import { Link } from 'react-router-dom';

const Hero = () => {

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Splide
        options={heroSplideOptions}
        aria-label="Hero Carousel"
        className="h-screen"
      >
        {heroCarouselData.map((slide) => (
          <SplideSlide key={slide.id} className="pointer-events-auto">
            <div className="relative h-screen w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center z-0 pointer-events-none"
                style={{ backgroundImage: `url(${slide.bgImage})`, backgroundPosition: 'top' }}
              />
              
              <div className="absolute inset-0 bg-sky-900/80 z-0 pointer-events-none" />
              
              {/* Slide Content */}
              <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10 pointer-events-auto">
                <AnimatePresence>
                  <motion.div 
                    key={`content-${slide.id}`}
                    className="mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6,
                      ease: "easeOut"
                    }}
                  >
                    <span className="text-green-400 font-medium block mb-2">
                      {slide.subtitle}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
                      {slide.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
                      {slide.description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                  <motion.div 
                    key={`stats-${slide.id}`}
                    className="bg-white/10 backdrop-blur-sm inline-block px-6 py-3 rounded-lg mb-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        delay: 0.2,
                        ease: "easeOut"
                      }
                    }}
                  >
                    <span className="text-3xl font-bold text-green-500">
                      {slide.stats.main}
                    </span>
                    <span className="text-white ml-2">
                      {slide.stats.secondary}
                    </span>
                  </motion.div>

                  <motion.div 
                    className="flex flex-col items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className='flex flex-col md:flex-row gap-4 items-center justify-center'>
                      <Link 
                        to="/about"
                        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-md font-medium flex items-center justify-center min-w-[200px] shadow-lg"
                      >
                        Learn About Us
                        <ChevronRight size={20} className="ml-2" />
                      </Link>
                      
                      <Link 
                        to="/contact"
                        className="bg-transparent hover:bg-white/10 text-white border-2 border-white px-8 py-3 rounded-md font-medium flex items-center justify-center min-w-[200px] shadow-lg"
                      >
                        Visit Us
                        <ChevronRight size={20} className="ml-2" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>

    </div>
  );
};

export default Hero;