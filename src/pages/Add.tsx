import Nav from "../components/Nav"
import { Input, Textarea } from "../components/Input"
import Button from "../components/Button"

const Add = () => {
  return (
    <>
      <Nav></Nav>
      <section className="w-full h-dvh flex items-center justify-center p-2.5">
          <form action="" className="w-lg p-5 bg-indigo-200 rounded-2xl flex flex-col" >
            <h2 className="text-2xl">Add A Job To Start Tracking</h2>
            <div className="">
              <Input type="text" name="" placeHolder="Company's Name" onChange={()=>{}} className="" required={true}/>
            </div>
            <div className="">
            <Input type="text" name="" placeHolder="Role" onChange={()=>{}} className="" required={true}/>
            </div>
            <div className="">
            <Input type="date" name="" placeHolder="Date of Application" onChange={()=>{}} className="" required={true}/>
            <select name="" id=""  className="" required>
              <option value="">Status</option>
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offered">Offered</option>
            </select>
            </div>
            <div className="">
              <Textarea name="" placeHolder="" className="" onChange={()=>{}}></Textarea>
            </div>
            <Button className="" type="submit" disabled={false} >Submit</Button>
          </form>
          <div className="w-[300px] h-[300px] rounded-[100%] ring-indigo-600/25 ring-40 fixed -top-16 -right-16 hidden md:block"></div>
            <div className="w-[300px] h-[300px] rounded-[100%] ring-indigo-600/25 ring-40 fixed -bottom-30 -left-20 hidden md:block"></div>
      </section>
    </>
  )
}

export default Add