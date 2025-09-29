"use client";
import { cn } from '@/lib/utils';
import React from 'react';
import Container from './Container';

const Apps = () => {
    return (
        <Container>
                <div className={cn("w-full grid grid-cols-4 lg:flex justify-evenly items-center gap-3")}>
                    <div className={cn("border rounded-md p-4 size-20")} />
                    <div className={cn("border rounded-md p-4 size-20")} />
                    <div className={cn("border rounded-md p-4 size-20")} />
                    <div className={cn("border rounded-md p-4 size-20")} />
                    <div className={cn("border rounded-md p-4 size-20")} />
                    <div className={cn("border rounded-md p-4 size-20")} />
                    <div className={cn("border rounded-md p-4 size-20")} />
                    <div className={cn("border rounded-md p-4 size-20")} />
                    <div className={cn("border rounded-md p-4 size-20")} />
                </div>            
        </Container>
    );
};

export default Apps;