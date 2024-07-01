'use client'

import SideBar from "@/components/SideBar";
import Image from 'next/image'
import type { Metadata } from "next";
import { Inter,IBM_Plex_Serif } from "next/font/google";
import MobileNav from "@/components/MobileNav";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn = {firstName: 'Stefano', lastName: 'Chance',email:'steffiechance@gmail.com'};

  return (
   <main className="flex h-screen w-full font-inter">
    <SideBar user={loggedIn} /> 
    <div className="flex size-full flex-col">
      <div className="root-layout">
        <Image src="/icons/logo.svg" width={30} height={30} alt='LOGO'/>
        <div>
          <MobileNav user={loggedIn} />
        </div>
      </div>
      {children}
    </div>
   </main>
  );
}