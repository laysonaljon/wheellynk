"use client"

import{CustomButton} from "@/components"
import Image from 'next/image'  

const Hero = () => {
    const handleScroll= () => {

    }

  return (
    <div className="hero">
        <div className="flex-1 pt-36 padding-x">
            <h1 className="hero__title">
                Find, Book or Rent a Car - quickly and easily!
            </h1>

            <p className="hero__subtitle">
                Improve your car rental experience with WHEELLYNK!
            </p>

            <CustomButton 
                title="Explore Cars"
                containerStyles="bg-primary-blue text-white rounded-full mt-10"
                btnType = "button"
                handleClick={handleScroll}
            
            />
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="/hero.png" alt="hero" fill className="object-contain"/>
            </div>  
            <div className="hero__image-overlay"/> 
        </div>
    </div>
  )
}

export default Hero