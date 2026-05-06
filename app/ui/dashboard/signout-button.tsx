import { PowerIcon } from '@heroicons/react/24/outline';

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        const { signOut } = await import("@/auth");
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
  );
}
