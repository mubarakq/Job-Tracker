type inputProps = {
    type: string;
    name: string;
    placeHolder: string;
    onChange: ()=>void;
    required?: boolean;
    className?: string;
}
const Input = ({
    type="",
    name="",
    placeHolder="",
    onChange,
    className="",
    required=false
}:inputProps) => {
  return (
    <>
    <input type={type} name={name} placeholder={placeHolder} onChange={onChange} required={required} className={className}/>
    </>
  )
}

export default Input