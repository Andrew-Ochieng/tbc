import { Link } from "react-router-dom";
import aboutImg from "../../assets/about-img.jpg"
const AboutUs = () => {
    return ( 
        <>
            <div className="hero min-h-screen opacity-70 bg-cover" 
                style={{backgroundImage: `url(${aboutImg})`}}>
                <div className="hero-content text-center">  
                    <div className="lg:max-w-2xl md:max-w-xl">
                        <div className="section-title text-white font-semibold">
                            <h3>About Us</h3>
                        </div>
                        <p className="text-white  tracking-wide md:text-lg text-sm">
                            Trinity Baptist Church - Funyula is a confessional church. As such, we believe that the Bible is the final authority, therefore expository preaching is central to our life, and worship. Our confessional standard is the 1689 London Baptist Confession of Faith. We believe it contains carefully worded summaries of the contents of sacred Scripture. To be sure, acceptance of every confessional distinctive is not required for membership at Trinity Baptist Church - Funyula. One may be a participating member of Trinity Baptist Church - Funyula by affirming the evangelical distinctive that salvation is accomplished by grace alone through faith alone because of Christ alone. Nevertheless, the officers of Trinity Baptist Church - Funyula must adhere to the system of doctrine taught by the 1689 London Baptist Confession of Faith.
                        </p>
                        <Link to='/about' className="btn-link btn">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default AboutUs;