"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from "@/public/images/Logo.webp";
import ButtonEmail from '../ButtonEmail';
import { HiMenuAlt4 } from 'react-icons/hi';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

const NavBarMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <>
            <nav className={cn("px-6 py-5 flex justify-between items-center bg-black lg:hidden")}>
                <div onClick={() => setMenuOpen(true)} className={cn("flex gap-2 items-center")}>
                    <div className={cn("bg-gradient-to-r from-[#5738F4] to-[#7D2AE8] hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-black text-white rounded-full p-1 mr-2 cursor-pointer")}>
                        <HiMenuAlt4 className={cn("text-white text-xl")} />
                    </div>
                    <Link href="/" className='flex gap-2 items-center'>
                        <Image src={Logo.src} alt="Logo" width={Logo.width} height={Logo.height} className={cn("w-auto h-6")} />
                        <p className={cn("text-white font-bold text-lg uppercase")}>Slmrsv</p>
                    </Link>
                </div>
                <ButtonEmail isMobile />
            </nav>
             <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
        </>
    );
};

export default NavBarMobile;