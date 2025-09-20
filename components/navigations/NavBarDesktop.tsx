"use client";
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Logo from "@/public/images/Logo.webp";
import Link from 'next/link';
import ButtonEmail from '../ButtonEmail';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/work';

const NavBarDesktop = () => {
  const pathname = usePathname();
  
    return (
        <nav className={cn("hidden", "lg:p-6 lg:flex lg:justify-between lg:gap-4 z-50", "xl:p-0")}>
            <div className="flex items-center gap-3">
              <Image
                src={Logo.src}
                alt="Logo"
                width={Logo.width}
                height={Logo.height}
                className="w-auto h-8"
              />
              <p className="font-bold text-xl uppercase font-montserrat">SBZ</p>
              <ul className="text-lg font-medium flex ml-9 gap-9 items-center">
                {navLinks.slice(1).map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href}
                      className={cn("text-white/70 font-semibold hover:text-white", link.href === pathname && "text-white")}>
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
