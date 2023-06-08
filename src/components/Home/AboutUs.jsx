import { Link } from "react-router-dom";

const AboutUs = () => {
    return ( 
        <>
            <div className="hero min-h-screen bg-base-200" 
                style={{}}>
                <div className="hero-content text-center">  
                    <div className="max-w-xl">
                        <div className="section-title">
                            <h3>About Us</h3>
                        </div>
                        <p className="font-extralight tracking-wide">
                            Grace Baptist Church - Kisumu is a confessional church. As such, we adhere to a written confession of faith that we believe to be a good and accurate summary of the Bible's teaching. Our confessional standard is the 1689 London Baptist Confession of Faith. We believe it contains carefully worded summaries of the contents of sacred Scripture. To be sure, acceptance of every confessional distinctive is not required for membership at Grace Baptist Church - Kisumu. One may be a participating member of Grace Baptist Church - Kisumu by affirming the evangelical distinctive that salvation is accomplished by grace alone through faith alone because of Christ alone. Nevertheless, the officers of Grace Baptist Church - Kisumu must adhere to the system of doctrine taught by the 1689 London Baptist Confession of Faith.
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