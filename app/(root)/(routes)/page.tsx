import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
 
export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/"/>
      return <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}