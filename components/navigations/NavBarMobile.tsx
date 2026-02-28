"use client";
import { cn } from '@/lib/utils';
import ButtonEmail from '../ButtonEmail';
import Link from 'next/link';
import Logo from '../Logo';

const NavBarMobile = () => {
    
    return (
        <nav className={cn("px-6 py-5 flex justify-between items-center bg-[#111] lg:hidden")}>
            <Link href="/" className='flex gap-1 items-center'>
                    <Logo size={32} />
                <p className={cn("text-white font-bold text-lg")}>Selimmersive</p>
            </Link>
            <ButtonEmail isMobile />
        </nav>
    );
};

export default NavBarMobile;