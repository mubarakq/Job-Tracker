import Nav from "../components/Nav"
import Input from "../components/Input"
import Button from "../components/Button"

const Add = () => {
  return (
    <>
      <Nav></Nav>
      <section className="w-full h-dvh flex items-center justify-center">
          <form action="" className="w-md p-5 bg-indigo-200 rounded-md">
            <div className="">
              <Input type="text" name="" placeHolder="Company's Name" onChange={()=>{}} className="" required={true}/>
              <Input type="text" name="" placeHolder="Role" onChange={()=>{}} className="" required={true}/>
            </div>
            <Button className="" type="submit" disable={false} >Submit</Button>
          </form>
      </section>
    </>
  )
}

export default Add