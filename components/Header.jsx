import { BsInstagram, BsPlusCircle, BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiOutlinePaperAirplane, HiOutlineUserGroup } from "react-icons/hi";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { modalState } from "../atoms/modalAtom";
import { useRecoilState } from "recoil";
const Header = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  return (
    <div className="border-b sticky top-0 drop-shadow bg-white z-50">
      <div className="customContainer">
        <div className="flex px-4 w-full justify-between items-center">
          <BsInstagram
            onClick={() => router.push("/")}
            className="cursor-pointer"
            size={24}
          />
          <div>
            <div className="relative p-3 rounded-md mt-1 hidden md:inline-block">
              <div className="absolute inset-y-0 p-3 flex items-center pointer-events-none">
                <BsSearch />
              </div>
              <input
                type="text"
                placeholder="Search"
                className=" bg-gray-100  block  pl-10 rounded-md border-gray-300 focus:ring-black focus:border-black"
              />
            </div>
          </div>
          <div className="flex space-x-4 items-center py-3">
            <AiOutlineHome
              onClick={() => router.push("/")}
              className="navBtn"
            />
            {session ? (
              <>
                <div className="relative navBtn">
                  <HiOutlinePaperAirplane className="navBtn rotate-45 " />
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white font-semibold animate-pulse rounded-full h-5 w-5 flex items-center justify-center text-xs">
                    3
                  </div>
                </div>
                <BsPlusCircle
                  onClick={() => setModalOpen(true)}
                  className="navBtn"
                />
                {/* <HiOutlineUserGroup className="navBtn" /> */}
                <AiOutlineHeart className="navBtn" />
                <img
                  onClick={signOut}
                  src={session?.user?.image}
                  height={30}
                  width={30}
                  className="contain rounded-full cursor-pointer hover:scale-110 transition transform duration-200 ease-out"
                />
              </>
            ) : (
              <button onClick={signIn}>Sign In</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
