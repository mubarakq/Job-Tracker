

import Nav from "../components/Nav"

import { Input, Textarea, Select } from "../components/Input"
import Button from "../components/Button"
import { DateInput } from "../components/Input"

const Add = () => {
  return (
    <>
      <div className="w-full bg-indigo-700 py-5 flex items-center justify-center z-20 fixed top-0">
        <Nav className="w-full max-w-7xl bg-indigo-700 px-11 flex items-center justify-between"/>
      </div>
      <div className="w-full flex justify-center">
      <section className="w-full h-dvh flex items-center justify-center p-2.5 md:pt-30">
          <form action="" className="w-lg p-5 bg-indigo-200 rounded-2xl flex flex-col gap-2.5" >
            <h2 className="text-2xl text-center font-bold text-indigo-800">Add A Job To Start Tracking</h2>
            <Input type="text" name="" placeHolder="Company's Name" onChange={()=>{}} className="focus:bg-indigo-300  outline-none w-full p-2.5 ring-1 ring-indigo-400 rounded-md" required={true} />
            <Input type="text" name="" placeHolder="Role" onChange={()=>{}} className="focus:bg-indigo-300 outline-none w-full p-2.5 ring-1 ring-indigo-400 rounded-md" required={true}/>
            <div className="focus:bg-indigo-300 w-full flex gap-2.5 flex-col md:flex-row">
              <DateInput/>
            <div className="focus:bg-indigo-300 md:w-1/2 w-full px-1.5 p-2.5 ring-1 ring-indigo-400 rounded-md">
              <Select name="" 
                    className="w-full h-full outline-none text-gray-700"  
                    onChange={(e)=>{console.log(e.target.value)}}
                    required={true}
                    options={[
                        {label: "Applied", value:"applied"},
                        {label: "Interview Fixed", value:"interview fixed"},
                        {label: "Interviewed", value:"interviewed"},
                        {label: "Offered", value:"offered accepted"},
                        {label: "In Progress", value:"in Progress"},
                        {label: "Offer Received", value:"offer Received"},
                        {label: "Reject", value:"reject"},
                    ]}
            />
            </div>
            </div>
            <Textarea name="" placeHolder="Write a description" className="focus:bg-indigo-300 w-full resize-none outline-none p-1.5 rounded-md ring-1 ring-indigo-400 overflow-x-auto overflow-y-auto scrollbar-hide" onChange={()=>{}}></Textarea>
            <Button className="w-full p-2.5 bg-indigo-600 hover:bg-indigo-800 text-gray-50 text-md font-bold rounded-md" type="submit" disabled={false} >Submit</Button>
          </form>
          <div className="w-[300px] h-[300px] rounded-[100%] ring-indigo-600/25 ring-40 fixed -top-16 -right-16 hidden md:block"></div>
            <div className="w-[300px] h-[300px] rounded-[100%] ring-indigo-600/25 ring-40 fixed -bottom-30 -left-20 hidden md:block"></div>
      </section>
      </div>
    </>
  )
}

export default Add