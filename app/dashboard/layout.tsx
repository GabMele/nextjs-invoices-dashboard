import SideNav from '@/app/ui/dashboard/sidenav';
import Link from 'next/link';
import { auth } from '@/auth';
import SignOutButton from '@/app/ui/dashboard/signout-button';
import Image from 'next/image';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col md:flex-row md:overflow-hidden flex-1">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-1 flex flex-col md:overflow-y-auto relative">
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
          <div className="p-6 md:p-12">
            {children}
          </div>
        </div>
      </div>
      
      {/* Footer - Full Width */}
      <footer className="bg-gradient-to-r from-gray-700 to-gray-600 text-white">
        <div className="w-full px-6 py-8 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">NQ</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">NextQuoInvoices</h3>
                <p className="text-gray-400 text-sm">Modern invoice management dashboard</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-sm mb-2">
                Built with Next.js showcasing modern web development
              </p>
              <Link 
                href="/dashboard/about" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors text-white font-medium"
              >
                <span>Learn About This Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-200 text-xs">
              &copy; 2026 NextQuo.com • Web Development, Apps & AI Integration • by Gabriele Melendugno
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
