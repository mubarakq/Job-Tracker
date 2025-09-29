import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import Logo from "./Logo"
import Navlinks from "./Navlinks"
import { Menu, X } from "lucide-react"

const Nav = () => {
  const [isClicked, setIsClicked] = useState(false)
  const navigate = useNavigate()
  
  
  const handleClicked =():void =>{
    setIsClicked((prev )=> !prev)
  }
  return (
    <nav className="w-full bg-indigo-700 px-11 py-5 flex items-center justify-between z-20 fixed top-0">
        <Logo onClick={()=>{navigate('/')}} className="text-2xl text-gray-50 font-bold cursor-pointer">
          JOB Tracker.
        </Logo>
        <Navlinks className="md:flex md:items-center md:gap-4 hidden">
          <Link className="font-family:Inter text-md hover:cursor-pointer text-gray-50" to="/">HOME</Link>
          <Link className="font-family:Inter text-md hover:cursor-pointer text-gray-50 " to="/Add">ADD JOB</Link>
          <Link className="font-family:Inter text-lg hover:cursor-pointer text-gray-50" to="/Job">VIEW JOBS</Link>
          <Link className="font-family:Inter text-lg hover:cursor-pointer text-gray-50" to="/About">ABOUT</Link>
        </Navlinks>
        {/* for mobile */}

        {isClicked && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={handleClicked} 
        />
      )}

        <Navlinks className={`w-65 h-dvh md:hidden flex-col fixed top-0 right-0 z-30 bg-indigo-400  ${isClicked ? "translate-x-0" : "translate-x-full"} transition-all ease-in-out duration-150`} >
          <div className="p-2.5" onClick={()=>{handleClicked()}}> <X size={40} className="text-gray-50"/> </div>
          <Link className="font-family:Inter text-md hover:cursor-pointer text-gray-50 block w-full p-5 hover:bg-indigo-600" to="/">HOME</Link>
          <Link className="font-family:Inter text-md hover:cursor-pointer text-gray-50 block w-full p-5 hover:bg-indigo-600" to="/Add">ADD JOB</Link>
          <Link className="font-family:Inter text-lg hover:cursor-pointer text-gray-50 block w-full p-5 hover:bg-indigo-600" to="/Job">VIEW JOBS</Link>
          <Link className="font-family:Inter text-lg hover:cursor-pointer text-gray-50 block w-full p-5 hover:bg-indigo-600" to="/About">ABOUT</Link>
        </Navlinks>
        <Menu size={20} className="text-gray-50 md:hidden" onClick={()=>{handleClicked()}}/>
    </nav>
  )
}
export default Nav