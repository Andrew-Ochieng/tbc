import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa"
import { HiMenuAlt3 } from "react-icons/hi"
export default function Navbar() {
  const [open, setOpen] = useState(false);

    const navLinks = [
        {id: 1,name: "About", route: "/about"},
        {id: 2,name: "Services", route: "/services"},
        {id: 3,name: "Ministries", route: "/ministries"},
        {id: 4,name: "Blog", route: "/blog"},
        {id: 5,name: "Events", route: "/events"},
        {id: 6,name: "Contact", route: "/contact"}
    ]
  return (
    <>
      <nav className="md:px-24 px-6 md:py-5 py-3 top-0 left-0 static z-[100] bg-white shadow-xl"> 
          <div className="md:flex justify-between items-center">
              <div className="flex justify-between items-center">
                  <Link to='/' className="flex items-center justify-center    ">
                      <div className="md:w-48 w-32">
                        <img src="tbc-nrb.svg" alt="" />
                      </div>
                  </Link>
                  <button onClick={() => setOpen((prev) => !prev)} className=' sm:hidden text-2xl text-gray-900'>
                      <HiMenuAlt3 />
                  </button>
              </div>

              <div className='md:flex hidden text-yellow-500'>
                  <ul className="md:flex items-center font-medium lg:space-x-6 md:space-x-4">
                      {navLinks.map((nav) => (
                          <li key={nav.id} className="navlink md:my-0 my-2 md:text-lg">
                              <Link to={nav.route}>
                                  {nav.name}
                              </Link>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>

          {/* mobile-version */}
          <div className={`${open ? "left-0 " : "left-[-100%]"} z-[100] sm:hidden absolute top-0 right-0 bottom-0  space-y-8 py-6 px-8 w-full h-screen duration-300 ease-in-out bg-cyan-700 opacity-95`}>
              <div className="flex justify-end">
                  <button onClick={() => setOpen((prev) => !prev)} className="sm:hidden text-2xl text-gray-200 text-right">
                      <FaRegTimesCircle />
                  </button> 
              </div>
              <ul className="flex flex-col items-center text-base font-medium space-y-8 text-yellow-500">
                  {navLinks.map((nav) => (
                      <li key={nav.id} onClick={() => setOpen((prev) => !prev)} className="navlink md:mx-4 mx-2 md:my-0 my-2">
                          <Link to={nav.route}>
                              {nav.name}
                          </Link>
                      </li>
                  ))}
              </ul>
          </div>
      </nav>
    </>
  )
}
