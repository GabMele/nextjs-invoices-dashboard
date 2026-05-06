import SideNav from '@/app/ui/dashboard/sidenav';
import MobileNav from '@/app/ui/dashboard/mobile-nav';
import Footer from '@/app/ui/dashboard/footer';
import { auth } from '@/auth';
import SignOutButton from '@/app/ui/dashboard/signout-button';
import Image from 'next/image';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile Navigation */}
      <MobileNav />
      
      <div className="flex flex-col md:flex-row md:overflow-hidden flex-1">
        {/* Desktop Sidebar - Hidden on Mobile */}
        <SideNav />
        <div className="flex-1 flex flex-col md:overflow-y-auto relative pt-16 md:pt-0 md:bg-gray-50 bg-gray-100">
          {/* User Badge - Right Upper Corner */}
          {session?.user && (
            <div className="absolute top-6 right-6 z-50 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 p-2">
                {session.user.image && (
                  <Image 
                    src={session.user.image} 
                    alt={session.user.name || 'User'} 
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                )}
                <div className="hidden sm:block">
                  <p className="font-medium text-gray-900 text-xs truncate max-w-[120px]">
                    {session.user.name || session.user.email}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-100">
                <SignOutButton />
              </div>
            </div>
          )}
          <div className="p-6 md:p-12 md:px-16">
            {children}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
