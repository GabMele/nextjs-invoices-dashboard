import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import NextQuoInvoicesLogo from '@/app/ui/nextquoinvoices-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from "@/auth";


export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-12 p-4 flex justify-center rounded-md bg-blue-600 md:justify-start"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <NextQuoInvoicesLogo />
        </div>
      </Link>
      <div className="flex grow flex-col space-y-2">
        <NavLinks />
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button className="sign-out-btn flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
