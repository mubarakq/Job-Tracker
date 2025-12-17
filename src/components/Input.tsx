
import type { inputProps, SelectProps, TextProp, CustomInputProps } from "../types/types"
// Date Utils
import { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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
    <textarea name={name} placeholder={placeHolder} className={className} onChange={onChange} maxLength={250} rows={3}></textarea>
    </>
  )
}


export const Select = ({
  name = "",
  onChange,
  options,
  required = false,
  className = "",
}: SelectProps) => {
  return (
    <select
      name={name}
      required={required}
      className={className}
      onChange={onChange}
      defaultValue=""
    >
      <option value="" disabled>
        Select Status
      </option>
      {options.map((opt, index) => (
        <option
          key={index}
          value={opt.value}
          className="bg-indigo-300 hover:bg-indigo-600 text-gray-50 rounded-md outline-none"
        >
          {opt.label}
        </option>
      ))}
    </select>
  );
};



// ✅ Typed custom input component
export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, placeholder, onChange}, ref) => (
    <input
      ref={ref}
      value={value || ""}
      onClick={onClick}
      onChange={onChange}
      placeholder={placeholder}
      className="p-1.5 py-2.5 w-full focus:bg-indigo-300 outline-none ring-1 ring-indigo-400 rounded-md"
    />
  )
);

CustomInput.displayName = "CustomInput"; // Required for forwardRef

export const DateInput = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
      <DatePicker
      selected={startDate}
      onChange={(date: Date | null) => setStartDate(date)}
      placeholderText="Pick a date..."
      dateFormat="dd-MM-yyyy"
      customInput={<CustomInput />}
      wrapperClassName="md:w-1/2 w-full"
    />
  );
}
