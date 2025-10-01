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
    placeHolder: string;
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
}

