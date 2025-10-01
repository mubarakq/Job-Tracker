
import type { inputProps, TextProp } from "../utils/types"

export const Input = ({
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



export const Textarea = ({
    name="",
    placeHolder="",
    onChange,
    className="",
}:TextProp
) => {
  return (
    <>
    <textarea name={name} placeholder={placeHolder} className={className} onChange={onChange} maxLength={250}></textarea>
    </>
  )
}

