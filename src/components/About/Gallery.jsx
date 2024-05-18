import { motion } from "framer-motion";
import { Rotate } from "react-reveal"

const Gallery = () => {
    const images = [ { url: "img-01.jpg" }, { url: "img-02.jpg" }, { url: "img-03.jpg" }, { url: "img-04.jpg" }, { url: "img-05.jpg" }, { url: "img-01.jpg" }, { url: "img-01.jpg" }, { url: "img-01.jpg" },
    ]

    return ( 
        <>
            <div className="md:px-24 px-4 md:py-24 py-16">
                <div className="section-title text-center">
                    <h3>Our Gallery</h3>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((item) => (
                        <Rotate bottom left>
                            <motion.div 
                                className="hover:cursor-pointer shadow-lg hover:shadow-lg bg-gray-100 rounded-xl"
                                whileHover={{y: -12}}
                                transition={{type: 'spring', stiffness: 80}}
                            >
                                <img className="w-full" src={item.url} alt="" />
                            </motion.div>
                        </Rotate>
                    ))}
                </div>
            </div>
        </>
     );
}
 
export default Gallery;