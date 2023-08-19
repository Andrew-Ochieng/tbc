import { FaPhone, FaUserAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";

const ContactDetails = () => {
    const contactInfo = [
        {icon: <FaUserAlt />, details: 'Trinity Baptist Church'},
        {icon: <FaPhone />, details: '+254 728 406 267'},
        {icon: <MdLocationOn />, details: 'Funyula, Busia - Kenya'},
        {icon: <HiOutlineMail />, details: 'tbcfunyula@gmail.com'},
    ]
    return ( 
        <>
            {contactInfo.map((info) => (
                <motion.div 
                    whileHover={{y: -8, scale: 1.02}}
                    transition={{type: 'spring', stiffness: 80}}
                    class="flex items-center bg-white rounded-lg ease-out duration-300 px-4 py-6 shadow-lg hover:shadow-xl">
                    <p className="text-cyan-800">{info.icon}</p>
                    <p class="md:ml-4 ml-2 mt-2 md:text-sm text-xs">{info.details}</p>
                </motion.div>
            ))}
        </>
     );
}
 
export default ContactDetails;