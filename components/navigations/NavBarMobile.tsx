"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Logo from "@/public/images/Logo.webp";
import ButtonEmail from '../ButtonEmail';
import Link from 'next/link';

const NavBarMobile = () => {
    
    return (
        <nav className={cn("px-6 py-5 flex justify-between items-center bg-[#111] lg:hidden")}>
            <Link href="/profile" className='flex gap-3 items-center'>
                <Image src={Logo.src} alt="Logo" width={Logo.width} height={Logo.height} className={cn("w-auto h-8 rounded-full")} />
                <p className={cn("text-white font-bold text-lg")}>SLMRSV</p>
            </Link>
            <ButtonEmail isMobile />
        </nav>
    );
};

export default NavBarMobile;