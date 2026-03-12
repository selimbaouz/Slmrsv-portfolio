"use client";
import { cn } from '@/lib/utils';
import ButtonEmail from '../ButtonEmail';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/Logo.webp';

const NavBarMobile = () => {
    
    return (
        <nav className={cn("px-6 py-5 flex justify-between items-center bg-[#111] lg:hidden")}>
            <Link href="/" className='flex gap-3 items-center'>
                <Image src={Logo} alt="Profile lmg" className='size-8 rounded-full' />
                <p className={cn("text-white font-bold text-lg uppercase")}>SBaouz</p>
            </Link>
            <ButtonEmail isMobile />
        </nav>
    );
};

export default NavBarMobile;