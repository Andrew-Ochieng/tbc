import { intros } from "../../data/content"
import { Fade, Bounce } from "react-reveal"

export default function Intro() {
  return (
    <>
        <div className="md:m-24 m-4 ">
            <Bounce top>
                <div className="md:mb-16 mb-8">
                    <h2 className="text-center section-title md:text-4xl text-2xl text-cyan-700">About</h2>
                </div>
            </Bounce>
            <Fade bottom>
                <div className="md:p-8 p-4 border rounded-2xl ">
                    {intros.map((item, index) => (
                        <div key={index} className="grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-8">
                            <div className="">
                                <p className="font-light text-gray-700 md:text-base text-sm tracking-wide md:leading-relaxed leading-normal">{item.content}</p>
                            </div>
                            <div className="w-full ">
                                <img src={item.image} alt="" className="h-full  w-full"/>
                            </div>
                        </div>
                    ))}
                </div>
            </Fade>
        </div> 
    </>
  )
}
