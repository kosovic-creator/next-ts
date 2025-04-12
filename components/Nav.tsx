import options from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { Session } from "next-auth";

// Extend the Session type to include the role property
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null; // Add role property
    };
  }
}
import Link from "next/link";
import {  HomeIcon } from "lucide-react";
import MailPage from "@/app/api/mail/page";
// import MailPage from "@/app/api/mail/page";


const Nav = async () => {
  const session = await getServerSession(options);
  //console.log(session);
  return (
    <>
 {/* <MailPage/> */}
    <header className="bg-black text-white">
      <nav className="flex justify-between items-center w-full px-10 py-4">
      <div><HomeIcon/></div>
        <div className="flex gap-10">
          <Link href="/">Home</Link>
          {session?.user?.role == "ADMIN" && (
            <Link href="/CreateUser">Create User</Link>
          )}
          <Link href="/ClientMember">Client Member</Link>
          <Link href="/Member">Member</Link>
          <Link href="/Public">Public</Link>
          {session ? (
            <>
              <p>{session.user.name}</p>
              <p>{session.user.email}</p>
              <MailPage/>
              <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
            </>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
          )}
        </div>
      </nav>
    </header>
    </>

  );
};
export default Nav;
