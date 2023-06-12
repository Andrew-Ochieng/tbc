import { ministries } from "../../data/content"
export default function MinistryCards() {
  return (
    <>
        <div className="md:m-24 m-4 ">
            <div className="md:mb-16 mb-8">
                <h2 className="text-center section-title md:text-4xl text-2xl text-cyan-700">Ministries</h2>
            </div>
            <div className="md:p-8 p-4 border rounded-2xl grid md:grid-cols-2 md:gap-16 gap-8">
                {ministries.map((item, index) => (
                    <div key={index} className="">
                        <div className="w-full md:mb-0 mb-4">
                            <img src={item.image} alt="" className="md:h-[60%] md:rounded-2xl rounded-xl"/>
                        </div>
                        <div className="">
                            <h3 className="text-cyan-800 md:text-3xl text-xl md:my-4 my-2">{item.name}</h3>
                            <p className="font-light text-gray-700 md:text-base text-sm tracking-wide md:leading-loose leading-normal">{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div> 
    </>
  )
}
