import options from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Link from "next/link";
import {  HomeIcon } from "lucide-react";


const Nav = async () => {
  const session = await getServerSession(options);
  //console.log(session);
  return (
    <header className="bg-black text-white">
      <nav className="flex justify-between items-center w-full px-10 py-4">
      <div><HomeIcon/></div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          {session?.user.role == "ADMIN" && (
            <Link href="/CreateUser">Create User</Link>
          )}
          <Link href="/ClientMember">Client Member</Link>
          <Link href="/Member">Member</Link>
          <Link href="/Public">Public</Link>
          {session ? (
            <>
              <p>{session.user.name}</p>
              <p>{session.user.email}</p>
              <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
            </>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Nav;
