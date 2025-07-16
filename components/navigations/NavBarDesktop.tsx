import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import Logo from "@/public/images/Logo.png";
import Link from 'next/link';
import ButtonEmail from '../ButtonEmail';

const NavBarDesktop = () => {
    return (
        <nav className={cn("hidden", "lg:flex lg:justify-between lg:gap-4 z-50" )}>
            <div className="flex items-center gap-3">
              <Image
                src={Logo.src}
                alt="Logo"
                width={Logo.width}
                height={Logo.height}
                className="w-auto h-8"
              />
              <p className="font-bold text-2xl">Slmrsv</p>
              <ul className="text-lg font-medium flex ml-9 gap-9 items-center">
                <li>
                  <Link href="/works" className="text-white/70 font-semibold hover:text-white">Works</Link>
                </li>
                <li>
                  <Link 
                    href="https://medium.com/@selimbaouz" 
                    className="text-white/70 font-semibold hover:text-white" 
                    target="_blank"
                    rel="noopener noreferrer">
                      Blog
                  </Link>
                </li>
                  <li>
                  <Link 
                    href="/support"
                    className="text-white/70 font-semibold hover:text-white" 
                    target="_blank"
                    rel="noopener noreferrer">
                      Support
                  </Link>
                </li>
                  <li>
                  <Link 
                    href="/legal-notice" 
                    className="text-white/70 font-semibold hover:text-white" 
                    target="_blank"
                    rel="noopener noreferrer">
                      Legal Notice
                  </Link>
                </li>
              </ul>
            </div>
            <ButtonEmail />
        </nav>
    );
};

export default NavBarDesktop;
