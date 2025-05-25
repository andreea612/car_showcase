import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btnType: "button" | "submit";
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manifacturer: string) => void;
}

export interface CarProps {
city_mpg:number
class:"compact car"
combination_mpg:number
cylinders:4
displacement:1.6
drive:string
fuel_type:string
highway_mpg:26
make: string
model:string
transmission:string
year:number
}