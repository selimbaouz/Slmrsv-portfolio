import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Logo from "@/public/images/Logo.png";
import ButtonEmail from '../ButtonEmail';
/* import { HiMenuAlt4 } from 'react-icons/hi'; */

const NavBarMobile = () => {
    return (
        <nav className={cn("px-6 py-5 flex justify-between items-center bg-black lg:hidden")}>
            <div className={cn("flex gap-2 items-center")}>
               {/*  <div className={cn("border border-white rounded-full p-1 mr-2 cursor-pointer")}>
                    <HiMenuAlt4 className={cn("text-white text-xl")} />
                </div> */}
                <Image src={Logo.src} alt="Logo" width={Logo.width} height={Logo.height} className={cn("w-auto h-6")} />
                <p className={cn("text-white font-bold text-xl")}>Slmrsv</p>
            </div>
            <ButtonEmail isMobile />
        </nav>
    );
};

export default NavBarMobile;