import { services } from "../../data/content"
export default function HomeCards() {
  return (
    <>
        <div className="md:m-24 mx-4 my-16 grid md:grid-cols-2 md:gap-24 gap-16">
            <div> 
                <h2 className="section-title md:mb-6 mb-2">Gatherings</h2>
                <p className="md:leading-relaxed">
                    The Bible gives two specific reasons for committing to be part of a close-knit family of believers—that we would be encouraged, and that we would encourage others (Hebrews 10:24-25). God designed the church to be the place where we would receive and give the accountability needed to persevere in our faith amid a darkening culture. With this goal in mind, the Bible calls believers to love, encourage, and stimulate one another to good works until Christ returns. This mandate is what drives our fellowships, meetings, Sunday School & Bible Studies and services at Trinity Baptist Church - Funyula. Join us to be edified with biblical teaching and preaching.
                </p>
            </div>

            <div className="md:space-y-16 space-y-8">
                {services.map((item, index) => (
                    <div key={index} className="md:space-y-4">
                        <h3 className="md:text-xl text-lg font-semibold text-cyan-700">
                            <span className="mr-2">{item.id}</span>
                            {item.name}</h3>
                        <p>{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </>
  )
}
