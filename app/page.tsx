import NextQuoInvoicesLogo from '@/app/ui/nextquoinvoices-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
// import styles from '@/app/ui/home.module.css';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      {/* <div className={styles.shape} /> */}
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52 slide-left-fade">
        <NextQuoInvoicesLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20 fade-in-up stagger-1">
          <p
            className="text-xl text-gray-800 md:text-3xl md:leading-normal font-heading"
          >
            <strong>Welcome to NextQuoInvoices.</strong>
          </p>
          <p className="text-base text-gray-600 md:text-lg">
            This is a demo app to test and show opportunities led by{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500 hover:text-blue-600 transition-colors">
              Next.js
            </a>
            {" "}featuring basic invoice management. The core data management is based on the demo app proposed by the{" "}
            <a href="https://nextjs.org/learn/" className="text-blue-500 hover:text-blue-600 transition-colors">
              Next.js Learn Course
            </a>
            .
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-blue-400 hover:shadow-lg btn-scale md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 fade-in-up stagger-2">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            alt=""
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
