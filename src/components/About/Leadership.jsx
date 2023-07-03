import { Slide } from "react-reveal"
import { leaders } from "../../data/content"

export default function 
() {
  return (
    <>
        <div className="md:px-24 px-4 md:py-24 py-16">
            <div className="section-title text-center">
                <h3>Our Leaders</h3>
            </div>
            <div className="grid md:grid-cols-2 md:gap-16 gap-8 md:m-16 m-6">
                {leaders.map((item, index) => (
                    <Slide bottom>
                    <div key={index} className="flex flex-col items-center text-center justify-center max-w-md">
                        <img src={item.image} alt="" className="rounded-xl md:w-72 md:h-80 w-64 h-72 " />
                        <div className="md:my-6 my-3">
                            <h3 className="uppercase text-cyan-800 md:text-3xl">{item.name}</h3>
                            <h5 className="font-semibold md:text-xl text-lg text-gray-700">{item.post}</h5>
                        </div>
                        <p className="font-light text-gray-800 md:text-lg ">{item.content}</p>
                    </div>
                    </Slide>
                ))}
            </div>
        </div>
        
    </>
  )
}
