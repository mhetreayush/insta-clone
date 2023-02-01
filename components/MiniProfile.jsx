import { signOut, useSession } from "next-auth/react";
const MiniProfile = () => {
  const { data: session } = useSession();
  return (
    <div className="flex items-center justify-center mt-14 ml-10">
      <img
        src={session?.user?.image}
        alt={session?.user?.name}
        className="rounded-full p-[2px] border w-14 h-14"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 font-semibold text-sm">
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
