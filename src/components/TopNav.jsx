import { MdLocationPin, MdPhone } from "react-icons/md"
import { TbMail } from "react-icons/tb"

export default function TopNav() {
  return (
    <>
        <div className="topnav md:px-24 px-6 py-2 bg-cyan-700 md:text-sm text-xs">
            <div className="md:flex items-center justify-between md:space-y-0 space-y-1 md:text-left text-center">
                <div className="flex items-center">
                    <MdLocationPin className="topnav-icons" />
                    <p className="topnav-content">Segero, Off Bumala Road, Funyula </p> 
                </div>
                <div className="flex items-center">
                    <MdPhone className="topnav-icons" />
                    <p className="topnav-content">+254 7284 06267</p> 
                </div>
                <div className="flex items-center">
                    <TbMail className="topnav-icons" />
                    <p className="topnav-content">tbcfunyula@gmail.com</p> 
                </div>
            </div>
        </div>
    </>
  )
}
