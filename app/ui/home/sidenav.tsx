import Link from 'next/link';
import NavLinks from '@/app/ui/home/nav-links';
import Logo from '@/app/ui/autotribe-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-center justify-center  rounded-md bg-blue-600 p-4"
        href="/"
      >
        <Logo />
      </Link>
      
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <div className="justify-center items-center hidden bg-brown h-96 w-full rounded-md md:flex">
          <p>Profile goes here</p>
        </div>
        <NavLinks />
        <div className="bg-brown hidden h-auto w-full grow rounded-md md:block"></div>
        <form
        // action={async () => {
        //   'use server';
        //   await signOut();
        // }}
        >
          <button className="bg-brown hover:bg-dun hover:text-night flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}