"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import Box from "./Box";
// import Library from "./Library";
import SidebarItem from "./SidebarItem";

type Props = {
  children: React.ReactNode;
  
};

export default function Sidebar({ children }: Props) {
  const pathname = usePathname();


  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className={twMerge(`flex h-full`,"h-[calc(100%-80px)]")}>
    <div className="hidden h-full w-[300px] flex-col gap-y-2 bg-black p-2 md:flex">
      <Box>
        <div className="flex flex-col gap-y-4 px-5 py-4">
          {routes.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
      </Box>
      <Box className="overflow-y-auto h-screen">
      {/* <Library /> */}
      </Box>

      
    </div>
    <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
  </div>
      
  );
}