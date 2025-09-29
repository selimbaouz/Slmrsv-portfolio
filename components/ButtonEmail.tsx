import Link from 'next/link';
import React, { FC } from 'react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface ButtonEmailProps {
    isMobile?: boolean;
}
const ButtonEmail: FC<ButtonEmailProps> = ({
    isMobile
}) => {
    return (
       <Link href="mailto:slmrsv.bz@gmail.com">
            <Button className={cn("font-bold rounded-full bg-gradient-to-r from-[#5738F4] to-[#7D2AE8] hover:bg-gradient-to-r hover:from-white hover:to-white hover:text-black text-white flex justify-center items-center lg:text-sm lg:p-6 cursor-pointer")} size={isMobile ? "default" : "lg"}>Get in touch</Button>
        </Link>
    );
};

export default ButtonEmail;