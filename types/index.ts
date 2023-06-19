import { MouseEventHandler } from "react"

export interface CustomButtomProps{
    title: string
    containerStyles?: string
    btnType: "button" | "submit"
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps{
    manufacturer: string
    setManufacturer: (manufacturer:string) => void
}