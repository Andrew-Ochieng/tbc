import ContactMap from "../components/Contact/ContactMap";
import ContactDetails from "../components/Contact/ContactDetails";
import ContactForm from "../components/Contact/ContactForm";
import { motion } from "framer-motion";
import Bounce from 'react-reveal/Bounce';

export default function Contact() {
  return (
    <div>
      <ContactMap />
      <div className="lg:p-16 md p-4" id="contact">
                <Bounce>
                    <div className="flex flex-col items-center justify-center md:pt-16 pt-8  text-gray-800">
                        <p className="text-cyan-500 uppercase font-semibold md:text-base text-sm">Get In Touch</p>
                        <h1 className="section-title">Contact Us</h1>
                    </div>
                </Bounce>
                <div className="sm:flex justify-around items-center lg:mx-32 md:mx-24 md:py-16 p-6 bg-gray-100 ">
                    <div>
                        <motion.div 
                            initial={{x: "-100vw", opacity: 0}}
                            animate={{x: 0, opacity: 1}}
                            transition={{type: "spring", delay: 0.2, stiffness: 50}}
                            class="flex flex-col md:text-2xl text-center text-2xl text-gray-700 space-y-6 ">
                            <ContactDetails />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{x: "100vw", opacity: 0}}
                        animate={{x: 0, opacity: 1}}
                        transition={{type: "spring", delay: 0.4, stiffness: 50}}
                        className="md:mb-0 mb-16">
                        <ContactForm />
                    </motion.div>
                    
                </div>
            </div>
      </div>
  )
}
