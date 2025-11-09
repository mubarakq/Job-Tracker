import type { ChangeEvent } from "react"

export type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void;
    type?: "button" | "submit" | "reset";
    disabled: boolean;
    className?: string;
    children?: React.ReactNode;
}

export type inputProps = {
    type: string;
    name: string;
    placeHolder?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void;
    required?: boolean;
    className?: string;
}

export type TextProp = Omit<inputProps, "type" | "required" > & {onChange:(event: ChangeEvent<HTMLTextAreaElement>)=>void}

export type cardProps = {
    companyName: string;
    role: string;
    date: string;
    status: string;
    description: string;
}

export type Option = {
    label:string; 
    value:string
}

export type SelectProps = {
    name: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>)=>void;
    options: Option[];
    required?: boolean;
    className?: string;
}


export type CustomInputProps = {
  value?: string;   
  onChange?: (event: React.ChangeEvent<HTMLInputElement>)=>void;
  onClick?: () => void;
  placeholder?: string;
  classname?: string;
};
export type navProps ={
    className: string;
}

export type cardMenuProps = {
  onEdit?: () => void;
  onDelete?: () => void;
  onPin?: () => void;
}
export type linkContain = {
    className?: string;
    children?: React.ReactNode;
}