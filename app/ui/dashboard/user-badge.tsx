import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import Image from 'next/image';

interface UserBadgeProps {
  user: {
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

export default function UserBadge({ user }: UserBadgeProps) {
  return (
    <div className="absolute top-6 right-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center gap-2 p-2">
        {user.image && (
          <Image 
            src={user.image} 
            alt={user.name || 'User'} 
            width={24}
            height={24}
            className="rounded-full"
          />
        )}
        <div className="hidden sm:block">
          <p className="font-medium text-gray-900 text-xs truncate max-w-[120px]">
            {user.name || user.email}
          </p>
        </div>
      </div>
      <div className="border-t border-gray-100">
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/" });
          }}
        >
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 p-2 text-xs text-gray-600 hover:bg-sky-100 hover:text-blue-600 transition-colors rounded-b-lg"
            title="Sign Out"
          >
            <PowerIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Sign Out</span>
          </button>
        </form>
      </div>
    </div>
  );
}
