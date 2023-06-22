import Link from "next/link"
import Image from "next/image"
import CustomButton from "./CustomButton"
import { footerLinks } from "@/constants"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 justify-center mt-5 border-t border-gray-100">
        <div className="flex max-md:flex-col flex-wrap justify-center gap-5 sm:px-16 px py-10">
           
            <div className="footer__links">
                <div className="footer__link">
                    <Image 
                        src="/logo.svg"
                        alt="Wheellynk Logo"
                        width={236}
                        height={36}
                        className="object-contain"
                    />
                    <p className="text-base text-gray-700">
                        Wheellynk<br/>
                        All rights Reserved &copy;
                    </p>
                </div>
                
                {footerLinks.map((link) => (
                    <div key={link.title} className="footer__link">
                        <h3 className="font-bold">{link.title}</h3>
                        {link.links.map((item) => (
                            <Link
                                key={item.title}
                                href={item.url}
                                className="text-gray-500"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                ))}
            </div>
        </div>

        <div className="flex justify-between items-center flex-wrap border-t border-gray-200 sm:px-16 px-6 py-10">         
            <div className="footer__copyrights-link">
                <p> @2023 Wheellynk. All Rights Reserved</p>
                <Link href="/" className="text-gray-500">Privacy Policy</Link>
                <Link href="/" className="text-gray-500"> Terms of Use</Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer