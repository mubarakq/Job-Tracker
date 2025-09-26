import { Link } from "react-router-dom"

const Nav = ()=>{
return(
    <nav className="w-full py-4 px-12 bg-indigo-600 flex items-center-safe justify-between fixed top-0 shadow-gray-400 z-20">
        <div className="font-family:Inter text-xl hover:cursor-pointer font-bold text-gray-50"><Link to="/">JOB Tracker.</Link></div>
        <div className="flex items-center gap-4">
        <Link className="font-family:Inter text-md hover:cursor-pointer text-gray-50 " to="/">HOME</Link>
        <Link className="font-family:Inter text-md hover:cursor-pointer text-gray-50 " to="/">ADD JOB</Link>
        <Link className="font-family:Inter text-lg hover:cursor-pointer text-gray-50" to="/Job">VIEW JOBS</Link>
        <Link className="font-family:Inter text-lg hover:cursor-pointer text-gray-50" to="/About">ABOUT</Link>
        </div>
    </nav>
)
}
export default Nav