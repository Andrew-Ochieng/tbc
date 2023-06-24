import data from "../../data/events"

export default function EventCards() {
  return (
    <>
        <div className="list-container">
            {data.events.map((item, index) => (
                <div key={index} className="card">
                    <a href={item.link} target="_blank" key={item.index}>
                        <img className="card-image" src={item.image} alt="" />
                        <div className="card-content">
                            <h4 className="card-title">{item.title}</h4>
                            <p className="card-description">{item.date}</p>
                        </div>
                    </a>
                </div>
            ))}
        </div>  
    </>
  )
}
