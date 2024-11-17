'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import defaultImg from '@/../../public/user.png'
import { ArrowDownRight, BriefcaseBusiness } from 'lucide-react';
import ShinyButton from '@/components/ui/shiny-button';
import { navLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const closeDrawer = () => setIsOpen(false); // for drawer

  return (
    <nav className="sticky top-0 backdrop-blur-2xl bg-white shadow-lg dark:bg-gray-800 bg-opacity-80 z-50 py-2">
      <div className="container px-6 py-2 mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo on the left side */}
          <Link href="/">
            <div className="bg-[#287279] rounded-full p-3 inline-block">
              <Image
                src="/logo1.png"
                width={20}
                height={7}
                alt="Logo"
              />
            </div>
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
            aria-label="toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"} />
            </svg>
          </button>

          {/* Backdrop for drawer */}
          {isOpen && (
            <div
              className="fixed inset-0 bg-gray-300 bg-opacity-80 z-10 lg:hidden"
              onClick={closeDrawer}
            ></div>
          )}

          {/* Drawer for mobile menu */}
          <div className={`fixed inset-y-0 left-0 z-20 w-64 bg-white dark:bg-gray-800 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
              aria-label="close menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex flex-col items-start mt-16 space-y-4 px-6 bg-gray-200">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='text-gray-900'
                >
                  {link.label}
                </Link>
              ))}
              {!session ? (
                <Link href='/sign-in'>
                  <ShinyButton className='bg-[#287279]' title='Login'>Login</ShinyButton>
                </Link>
              ) : (
                <DropdownMenu>
                  <DropdownMenuTrigger className='border-none'>
                    <Image src={session.user?.image || defaultImg} alt="User Profile Image" className='rounded-full' width={50} height={50} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>{session.user?.name}</DropdownMenuItem>
                    <DropdownMenuItem>
                      <button onClick={() => signOut()} className="flex items-center gap-2">Sign out <ArrowDownRight /></button>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
              <Link href="/dashboard" className="text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 w-full px-3 py-2 rounded-md">Dashboard</Link>
            </div>
          </div>

          {/* Menu Items for larger screens, positioned on the right side with gap */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='text-gray-900'
              >
                {link.label}
              </Link>
            ))}

            <h1>
              <BriefcaseBusiness />
            </h1>
            {!session ? (
              <Link href='/sign-in'>
                <Button className='bg-[#287279]' title='Login'>Login</Button>
              </Link>
               
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger className='border-none'>
                  <Image src={session.user?.image || defaultImg} alt="User Profile Image" className='rounded-full' width={50} height={50} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>{session.user?.name}</DropdownMenuItem>
                  <DropdownMenuItem>
                    <button onClick={() => signOut()} className="flex items-center gap-2">Sign out <ArrowDownRight /></button>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/dashboard" className="py-2 font-bold text-gray-700 dark:text-gray-200">Dashboard</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
