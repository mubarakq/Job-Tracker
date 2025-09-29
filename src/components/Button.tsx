// import React from 'react'
type ButtonProps = {
    onClick?: ()=>void;
    type?: "button" | "submit";
    disable: boolean;
    className?: string;
    children?: React.ReactNode;
}
const Button = ({
  onClick, 
  type="button", 
  disable = false, 
  className= "",
  children
}:ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className={className} disabled={disable}>
      {children}
    </button>
  )
}

export default Button