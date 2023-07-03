import gallery1 from "../../assets/gallery1.jpg"
import gallery2 from "../../assets/gallery2.jpg"
import gallery3 from "../../assets/gallery3.jpg"
import gallery4 from "../../assets/gallery4.jpg"
import gallery5 from "../../assets/gallery6.jpg"
import gallery6 from "../../assets/about4.jpg"
import gallery7 from "../../assets/about3.jpg"
import gallery8 from "../../assets/gallery8.jpg"
import { motion } from "framer-motion";
import { Rotate } from "react-reveal"

const Gallery = () => {
    const images = [
        { url: gallery6 },
        { url: gallery7 },
        { url: gallery5 },
        { url: gallery4 },
        { url: gallery3 },
        { url: gallery2 },
        { url: gallery1 },
        { url: gallery8 },
    ]

    return ( 
        <>
            <div className="md:px-24 px-4 md:py-24 py-16">
                <div className="section-title text-center">
                    <h3>Our Gallery</h3>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {images.map((item) => (
                        <Rotate bottom left>
                            <motion.div 
                                className="hover:cursor-pointer shadow-lg hover:shadow-lg p-2 bg-gray-100 rounded-xl"
                                whileHover={{y: -12}}
                                transition={{type: 'spring', stiffness: 80}}
                            >
                                <img className="rounded-xl" src={item.url} alt="" />
                            </motion.div>
                        </Rotate>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default Gallery;