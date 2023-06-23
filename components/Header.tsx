"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { BiSearch } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import { useUser } from "../hooks/useUser";
import Button from "./Button";


type Props = {
    children: React.ReactNode;
    className?: string;
};

export default function Header({ children, className }: Props) {

    const router = useRouter();

    const handleLogout = async () => {
    };
    return (
        <div
            className={twMerge(
                `
          h-fit
          bg-gradient-to-b
          from-emerald-800
          p-6
        `,
            className
            )}
        >
            <div className="
            w-full
            mb-4
            flex
            items-center
            justify-between
            "
            >
            <div className="
             hidden 
             items-center 
             gap-x-2 
             md:flex
            "
            >
            <button 
              onClick={() => router.back()}
//            
className="flex items-center justify-center rounded-full bg-black transition hover:opacity-75"
>
  <RxCaretLeft size={35} className="text-white" />
</button>
<button
  onClick={() => router.forward()}
  className="flex items-center justify-center rounded-full bg-black transition hover:opacity-75"
>
  <RxCaretRight size={35} className="text-white" />
</button>
</div>
<div className="flex items-center gap-x-2 md:hidden">
<button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
  <HiHome className="text-black" size={20} />
</button>
<button className="flex items-center justify-center rounded-full bg-white p-2 transition hover:opacity-75">
  <BiSearch className="text-black" size={20} />
</button>
</div>
<div className="flex items-center justify-between gap-x-4">

  <div className="flex items-center gap-x-4">
    <Button onClick={handleLogout} className="bg-white px-6 py-2">
      Logout
    </Button>
    <Button
      onClick={() => router.push("/account")}
      className="bg-white"
    >
      <FaUserAlt />
    </Button>
  </div>

  <>
    <div>
      <Button
        
        className="bg-transparent font-medium text-neutral-300"
      >
        Sign up
      </Button>
    </div>
    <div>
      <Button className="bg-white px-6 py-2 ">
        Log in
      </Button>
    </div>
  </>

</div>
</div>
{children}
</div>
);
}
