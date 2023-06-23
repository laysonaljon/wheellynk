"use client"

import {useState} from 'react'
import Image from 'next/image'
import { CarProps } from '@/types'
import CustomButton from './CustomButton'
import { calculateCarRent } from '@/utils'
import CarDetails from './CarDetails'

interface CardCarProps{
    car:CarProps
}

const CarCard = ( {car} : CardCarProps ) => {
    const { city_mpg,combination_mpg,cylinders,displacement,drive,fuel_type,highway_mpg,make,model,transmission,year} = car;
    const carRent = calculateCarRent (city_mpg,year)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="car-card group">
            <div className="car-card__content">
                <h2 className="car-card__content-title">{year} {make} {model} </h2>               
            </div>
            <p className="flex mt-6 text-[32px] font-extrabold">
                <span className="self-start text-[14px] font-semibold">
                    ₱
                </span>
                {carRent}
                <span className="self-end text-[14px] font-medium">
                    /day
                </span>
            </p>
            
            <div className="relative w-full h-40 my-3 object-contain">
                <Image 
                    src = "/hero.png"
                    alt = {model} 
                    fill priority
                    className="object-contain"
                />
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/steering-wheel.svg"
                            height={20}
                            width={20}
                            alt="steering-wheel"
                        />
                        <p className="text-14">{transmission === 'a' ? "Automatic" : "Manual"} </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/tire.svg"
                            height={20}
                            width={20}
                            alt="tire"
                        />
                        <p className="text-14">{drive === 'fwd' ? "Forward" : "All Wheel"} </p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image
                            src="/gas.svg"
                            height={20}
                            width={20}
                            alt="gas"
                        />
                        <p className="text-14">{fuel_type === "gas" ? "Gas: " + city_mpg + "MPG" : fuel_type === "diesel" ? "Diesel: " + city_mpg + "MPG" : "Electric : " + city_mpg + "MPGe"  }</p>
                    </div> 
                </div>
                
                <div className="car-card__btn-container">
                    <CustomButton 
                        title= "View More" 
                        containerStyles="w-full py-[16] rounded-full bg-primary-blue"   
                        textStyles="text-white text-[14px] leading-[17px] font-bold"  
                        rightIcon = "/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}                 
                    />
                </div>
            </div>

            <CarDetails
                isOpen = {isOpen} 
                closeModal ={() => {setIsOpen(false)}}
                car = {car}
            />

        </div>
    )
}

export default CarCard