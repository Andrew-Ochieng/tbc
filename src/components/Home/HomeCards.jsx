import { Link } from "react-router-dom"
import data from "../../data/about.json"

export default function ServiceCards() {
    
  return (
    <>
        <div className="md:mx-24 mx-4 md:my-24 my-16 min-h-screen flex justify-center items-center">
            <div className="grid md:grid-cols-3 gap-16 text-center border md:p-16 p-6 rounded-lg hover:shadow-md">
                {data.about.map((item, index) => (
                    <div key={index}>
                        <h3 className="uppercase md:mb-16 mb-8 text-cyan-700 md:text-4xl">{item.name}</h3>
                        <p className="md:mb-8 mb-4 tracking-wide font-light">{item.description}</p>
                        <Link to={item.link} className="btn-link ">
                            More Info
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
