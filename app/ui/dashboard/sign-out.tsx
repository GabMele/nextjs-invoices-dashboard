import { signOut } from '@/auth';
import { PowerIcon } from '@heroicons/react/24/outline';

export function SignOutButton({ className = '' }: { className?: string }) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut({ redirectTo: "/" });
      }}
    >
      <button
        type="submit"
        className={`w-full flex items-center justify-center gap-2 p-2 text-xs text-gray-600 hover:bg-sky-100 hover:text-blue-600 transition-colors rounded-b-lg ${className}`}
        title="Sign Out"
      >
        <PowerIcon className="w-4 h-4" />
        <span className="hidden sm:inline">Sign Out</span>
      </button>
    </form>
  );
}
