import { type } from "os"
import { MouseEventHandler } from "react"

export interface CustomButtomProps{
    title: string
    containerStyles?: string
    textStyles?: string
    btnType?: "button" | "submit"
    rightIcon?: string
    isDisable?: boolean
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SearchManufacturerProps{
    manufacturer: string
    setManufacturer: (manufacturer:string) => void
}

export interface CarProps{
    city_mpg:number
    class:string
    combination_mpg:number
    cylinders:number
    displacement:number
    drive:string
    fuel_type:string
    highway_mpg:number
    make:string
    model:string
    transmission:string
    year:number

}

export interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    cityMPG: number;
  }

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }

  export interface HomeProps {
    searchParams: FilterProps;
  }
  
export interface OptionProps {
    title: string;
    value: string;
  }
  
  export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
  }
  
  export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
  }
