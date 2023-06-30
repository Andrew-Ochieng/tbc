import { Slide } from "react-reveal"
import { pastors } from "../../data/content"
import { deacons } from "../../data/content"

export default function 
() {
  return (
    <div>
        <div className="flex flex-col items-center justify-center md:m-16 m-6">
            {pastors.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center justify-center max-w-md">
                    <img src={item.image} alt="" className="rounded-full md:w-72 md:h-72 w-64 h-64 " />
                    <div className="md:my-6 my-3">
                        <h3 className="uppercase text-cyan-800 md:text-3xl">{item.name}</h3>
                        <h5 className="font-semibold md:text-xl text-lg text-gray-700">{item.post}</h5>
                    </div>
                    <p className="font-light text-gray-700 md:text-base text-sm">{item.content}</p>
                </div>
            ))}
        </div>

        
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-16 gap-8 md:m-16 m-6">
                {deacons.map((item, index) => (
                    <Slide bottom>
                    <div key={index} className="flex flex-col items-center text-center justify-center max-w-md">
                        <img src={item.image} alt="" className="border-8 border-gray-200 rounded-full md:w-72 md:h-72 w-64 h-64 " />
                        <div className="md:my-6 my-3">
                            <h3 className="uppercase text-cyan-800 md:text-3xl">{item.name}</h3>
                            <h5 className="font-semibold md:text-xl text-lg text-gray-700">{item.post}</h5>
                        </div>
                        <p className="font-light text-gray-700 md:text-base text-sm">{item.content}</p>
                    </div>
                    </Slide>
                ))}
            </div>
        
    </div>
  )
}
