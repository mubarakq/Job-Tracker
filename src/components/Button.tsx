// import React from 'react'
import type { ButtonProps } from "../types/types"
const Button:React.FC<ButtonProps> = ({
  onClick, 
  type="button", 
  disabled = false, 
  className= "",
  children
}:ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={className} disabled={disabled}>
      {children}
    </button>
  )
}

export default Button