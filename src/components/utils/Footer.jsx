import { Link } from "react-router-dom"
import logo from "../../assets/tbc-logo.png"
import { FaChevronUp } from "react-icons/fa6";

export default function Footer() {
  const today = new Date()
  let year = today.getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="">
        <div>
          <footer className="md:px-24 px-4 bg-base-300 footer p-10 text-base-content">
            <div>
              <div className="md:w-48 w-32">
              <img src={logo} alt="" />
              </div>
              <div className="space-y-1 md:mt-4 mt-2 md:">
                <p>P.O. Box 14 - 50406</p>
                <p>Funyula, Busia - Kenya</p>
                <p>tbcfunyula@gmail.com</p>
                <p>+254 728 406267</p>
              </div>
            </div> 
            <div>
              <span className="footer-title">Menu</span> 
              <Link to='/about' className="link link-hover">About Us</Link> 
              <Link to='/services' className="link link-hover">Services</Link> 
              <Link to='/ministries' className="link link-hover">Ministries</Link> 
              <Link to='/blogs' className="link link-hover">Blog</Link>
              <Link to='/contact' className="link link-hover">Contact</Link>
            </div> 
            <div>
              <span className="footer-title">Social</span> 
              <div className="grid grid-flow-col gap-4">
                <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                <Link to='https://web.facebook.com/trinitybaptistchurchfunyula/'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
              </div>
            </div>
          </footer>
          <div className="md:px-24 px-4 md:py-4 py-3 flex justify-center text-center bg-cyan-700 md:text-sm text-[11px] text-gray-100">
            <p>
              Copyright © 
              <span className="pl-1 ">{year}</span> | 
              <Link className="pl-1 text-yellow-500">Trinity Baptist Church - Funyula</Link>
            </p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed md:bottom-10 bottom-6 md:right-6 right-4 md:p-3 p-2 bg-cyan-600 text-white shadow-md focus:outline-none"
        >
            <FaChevronUp />
      </button>
    </>
  )
}
