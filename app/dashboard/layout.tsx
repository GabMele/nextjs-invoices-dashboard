import SideNav from '@/app/ui/dashboard/sidenav';
import { auth } from '@/auth';
import { signOut } from '@/auth';

export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth();

  return (
    <div className="flex flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-1 p-6 md:overflow-y-auto md:p-12">
        {/* User Session Display */}
        {session?.user && (
          <div className="mb-6 p-4 bg-gray-200 rounded-lg border border-gray-400">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {session.user.image && (
                  <img 
                    src={session.user.image} 
                    alt={session.user.name || 'User'} 
                    className="w-10 h-10 rounded-full"
                  />
                )}
                <div>
                  <p className="font-medium text-gray-900">
                    {session.user.name || session.user.email}
                  </p>
                  <p className="text-sm text-gray-500">{session.user.email}</p>
                </div>
              </div>
              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button
                  type="submit"
                  className="sign-out-btn px-4 py-2 text-sm font-medium rounded-md"
                >
                  Sign Out
                </button>
              </form>
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}
