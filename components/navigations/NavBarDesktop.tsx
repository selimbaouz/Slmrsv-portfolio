"use client";
import { cn } from '@/lib/utils';
import React from 'react';
import Link from 'next/link';
import ButtonEmail from '../ButtonEmail';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/work';
import Logo from '../Logo';

const NavBarDesktop = () => {
  const pathname = usePathname();
  
    return (
        <nav className={cn("hidden", "lg:p-6 lg:flex lg:justify-between lg:gap-4 z-50", "xl:p-0")}>
            <div className="flex items-center gap-3">
              <Link href="/" className='flex items-center gap-2'>
                <Logo size={18} color='#ffffff' />
                <p className="font-bold font-montserrat text-xl">Selimmersive</p>
              </Link>
              <ul className="font-medium flex ml-9 gap-9 items-center">
                {navLinks.slice(1).map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href}
                      className={cn("text-white font-semibold hover:underline", link.href === pathname && "text-white")}>
                    {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <ButtonEmail />
        </nav>
    );
};

export default NavBarDesktop;
