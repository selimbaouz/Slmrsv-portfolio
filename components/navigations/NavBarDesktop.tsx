import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Logo from "@/public/images/Logo.png";
import { Button } from '../ui/button';
import Link from 'next/link';

const NavBarDesktop = () => {
    return (
        <nav className={cn("hidden", "lg:flex lg:justify-between lg:gap-4")}>
            <div className="flex items-center gap-3">
              <Image
                src={Logo.src}
                alt="Logo"
                width={Logo.width}
                height={Logo.height}
                className="w-auto h-8"
              />
              <p className="font-bold text-2xl">Slmrsv</p>
             {/*  <ul className="text-lg font-medium flex ml-9 gap-9 items-center">
                <li><a href="#home" className="hover:text-[#00C4CC]">Home</a></li>
                <li><a href="#work" className="hover:text-[#00C4CC]">Work</a></li>
                <li><a href="#about" className="hover:text-[#00C4CC]">About</a></li>
                <li><a href="#contact" className="hover:text-[#00C4CC]">Contact</a></li>
              </ul> */}
            </div>
            <Link href="mailto:slmrsv.bz@gmail.com z-50 absolute top-5 right-5">
                <Button className={cn("font-bold rounded-full bg-[#6D29F1] text-white flex justify-center items-center text-base p-6 cursor-pointer")} size="lg">Get in touch</Button>
            </Link>
        </nav>
    );
};

export default NavBarDesktop;
