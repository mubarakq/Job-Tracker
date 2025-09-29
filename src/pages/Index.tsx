import { useNavigate } from "react-router-dom"
import Nav from "../components/Nav"
import Button from "../components/Button"
import Frame from "../assets/Frame.svg"

function Index() {
  const navigate = useNavigate()
  return (
    <>
      <Nav/>
        <section className={`w-full h-dvh bg-indigo-100/0 flex items-center -z-10`}>
            <div
  className="
    w-full h-full flex flex-col justify-center items-center md:items-start px-11 py-5
    bg-cover bg-center bg-no-repeat
    md:bg-none
    bg-[linear-gradient(rgba(79,70,229,0.3),rgba(79,70,229,0.3)),url('/src/assets/Woman.png')]
  "
>
  <h2 className="text-2xl md:text-4xl md:text-indigo-600 text-indigo-100 font-bold text-center md:text-left">FROM APPLICATION</h2>
  <h2 className="text-2xl md:text-4xl md:text-indigo-600 text-indigo-100 font-bold text-center md:text-left">TO OFFER</h2>
  <p className="md:text-lg text-md md:w-4/5 w-full md:text-gray-950 text-gray-100 md:text-left text-center">
    Keep every application, interview, and follow-up organized in one simple dashboard.
    Say goodbye to messy spreadsheets and hello to career clarity.
  </p>
  <div className="flex gap-2.5 mt-2.5">
    <Button className="py-1.5 px-2 md:px-3 text-gray-50 text-md font-bold bg-indigo-600 hover:bg-indigo-800 rounded-full transition duration-150 ease-in hover:cursor-pointer" type="button" onClick={()=>{ navigate('/Add')}} disable={false}>
      Start Tracking
    </Button>
    <Button className="py-1.5 px-3 text-md font-bold bg-gray-100/80 text-indigo-600 md:border-2 hover:bg-gray-100 hover:text-indigo-700 md:border-indigo-600 md:text-indigo-600 rounded-full md:hover:bg-indigo-600 md:hover:text-gray-50 transition duration-150 ease-in hover:cursor-pointer" type="button" onClick={()=>{ navigate('/Job')}} disable={false}>
      View Jobs
    </Button>
  </div>
</div>
 <div className="w-1/2 h-full md:flex items-center justify-center py-5 px-11 hidden">
                <img src={Frame} alt="" className="w-90 drop-shadow-xl z-10"/>
  </div>
            <div className="w-[300px] h-[300px] rounded-[100%] ring-indigo-600/25 ring-40 fixed -top-16 -right-16 hidden md:block"></div>
            <div className="w-[300px] h-[300px] rounded-[100%] ring-indigo-600/25 ring-40 fixed -bottom-30 -left-20 hidden md:block"></div>
        </section>
    </>
  )
}

export default Index