import { Link } from "react-router-dom"


export default function Footer() {
  const years = new Date()
  let year = years.getFullYear()

  return (
    <>
      <div className="">
        <footer>
          <div className="md:px-24 px-6 md:py-4 py-2 flex justify-center text-center bg-cyan-700 md:text-sm text-xs">
            <p>
              Copyright © 
              <span className="pl-1 ">{year}</span> | 
              <Link className="pl-1 text-yellow-500">Trinity Baptist Church - Funyula</Link>
            </p>
          </div>
        </footer>
      </div>

    </>
  )
}
