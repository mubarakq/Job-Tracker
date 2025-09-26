import { useNavigate } from "react-router-dom"
import Nav from "./Nav"
import Button from "../components/Button"
import Frame from "../assets/Frame.svg"

function Index() {
  const navigate = useNavigate()
  return (
    <>
        <Nav/>
        <section className="w-full h-dvh bg-indigo-100 flex items-center -z-10">
            <div className="w-1/2 h-full flex py-5 flex-col justify-center px-11 z-10"> 
                <h2 className="text-4xl text-indigo-600 font-bold">FROM APPLICATION</h2>
                <h2 className="text-4xl text-indigo-600 font-bold">TO OFFER</h2>
                <p className="text-md w-3/4">Keep every application, interview, and follow-up organized in one simple dashboard. Say goodbye to messy spreadsheets and hello to career clarity.</p>
                <div className="flex gap-2.5 mt-2.5">
                <Button  type="button" onClick={()=>{ navigate('/Add')}}  className="py-2.5 px-3 text-gray-50 font-bold bg-indigo-600 hover:bg-indigo-800 rounded-full transition duration-150 ease-in hover:cursor-pointer" disable={false}>Start Tracking</Button>
                <Button  type="button" onClick={()=>{ navigate('/Job')}}  className="py-2.5 px-3 font-bold bg-indigo-600/5 text-indigo-600 border-indigo-600 border-2 hover:bg-indigo-600 hover:text-gray-50 rounded-full transition duration-150 ease-in hover:cursor-pointer" disable={false}>View Jobs</Button>
                </div>
            </div>
            <div className="w-1/2 h-full flex items-center justify-center py-5 px-11">
                <img src={Frame} alt="" className="w-90 drop-shadow-xl z-10"/>
            </div>
            <div className="w-[300px] h-[300px] rounded-[100%] ring-indigo-600/25 ring-40 fixed -top-16 -right-16"></div>
            <div className="w-[300px] h-[300px] rounded-[100%] ring-indigo-600/25 ring-40 fixed -bottom-30 -left-20"></div>
        </section>
    </>
  )
}

export default Index