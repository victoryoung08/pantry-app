import Link from "next/link";

function MemberNav({ user }) {
  return (
    <nav className="w-full h-16 flex items-center bg-black text-white">
      <ul className="flex w-full justify-around items-center">
        <li>
          <Link href="/">Home</Link>
        </li>
        {!user ? (
          <>
            <li>
              <Link href="/signup">Signup</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}

export default MemberNav;
