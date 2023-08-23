import { Link } from "react-router-dom";
import { useState } from "react";
import { FaRegTimesCircle } from "react-icons/fa"
import { HiMenuAlt3 } from "react-icons/hi"
import logo from "../assets/tbc-logo.png"

export default function Navbar() {
  const [open, setOpen] = useState(false);

    const navLinks = [
        {id: 1,name: "About", route: "/about"},
        {id: 2,name: "Services", route: "/services"},
        {id: 3,name: "Ministries", route: "/ministries"},
        {id: 4,name: "Blog", route: "/blogs"},
        {id: 6,name: "Contact", route: "/contact"}
    ]

  return (
    <>
      <nav className="md:px-24 px-4 md:py-5 py-5 top-0 left-0 sticky z-[100] bg-white opacity-90 shadow-lg"> 
          <div className="md:flex justify-between items-center">
              <div className="flex justify-between items-center">
                    <Link to='/' className="flex items-center justify-center    ">
                        <div className="md:w-52 w-36">
                            <img src={logo} alt="Church logo" />
                        </div>
                    </Link>
                    <button onClick={() => setOpen((prev) => !prev)} className=' sm:hidden text-2xl text-gray-900'>
                        <HiMenuAlt3 />
                    </button>
              </div>

              <div className='md:flex hidden text-cyan-700'>
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
          <div className={`${open ? "left-0 " : "left-[-100%]"} z-[100] sm:hidden absolute bottom-0 top-0 right-0 py-6 px-5 w-[100%] h-screen duration-1000 ease-in-out bg-cyan-700 opacity-95`}>
              <div className="flex justify-end">
                  <button onClick={() => setOpen((prev) => !prev)} className="sm:hidden text-2xl text-gray-200 text-right">
                      <FaRegTimesCircle />
                  </button> 
              </div>
              <ul className="flex flex-col text-lg font-medium space-y-4 text-gray-200 mt-8">
                  {navLinks.map((nav) => (
                      <li 
                        key={nav.id} 
                        onClick={() => setOpen((prev) => !prev)} 
                        className="navlink mx-2 uppercase hover:bg-white hover:text-gray-600 py-1 px-2 rounded-md hover:cursor-pointer"
                    >
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
