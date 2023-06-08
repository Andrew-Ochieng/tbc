import { Link } from "react-router-dom"
import data from "../../data/about.json"

export default function ServiceCards() {
    data.about.map((item) => {
        console.log(item)
    })
  return (
    <>
        <div className="md:mx-24 mx-4 md:my-28 my-12">
            <div className="grid md:grid-cols-3 gap-16 text-center border md:p-16 p-6 rounded-lg">
                {data.about.map((item) => (
                    <div>
                        <h3 className="uppercase md:mb-16 mb-8 text-cyan-700 md:text-4xl">{item.name}</h3>
                        <p className="md:mb-8 mb-4">{item.description}</p>
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
