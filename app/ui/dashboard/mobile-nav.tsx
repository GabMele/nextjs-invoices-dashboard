"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  InformationCircleIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import NextQuoInvoicesLogo from "@/app/ui/nextquoinvoices-logo";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
  { name: "About", href: "/dashboard/about", icon: InformationCircleIcon },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
      >
        <Bars3Icon className="size-6 text-gray-700" />
      </button>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Slide-out Menu */}
          <div className="md:hidden fixed inset-y-0 left-0 w-80 bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link
                  href="/"
                  className="flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-32 text-blue-600">
                    <NextQuoInvoicesLogo />
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <XMarkIcon className="size-6 text-gray-700" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={clsx(
                        "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                        {
                          "bg-blue-50 text-blue-600 border border-blue-200":
                            pathname === link.href,
                          "text-gray-700 hover:bg-gray-50 hover:text-gray-900":
                            pathname !== link.href,
                        },
                      )}
                    >
                      <LinkIcon className="size-5" />
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </nav>

              {/* Sign Out Button */}
              <div className="p-4 border-t border-gray-200">
                <Link
                  href="/api/auth/signout"
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                >
                  <svg
                    className="size-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Sign Out</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
