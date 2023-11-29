import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <header className="p-24 w-full h-fit text-center">
        <h1 className="text-3xl font-bold">Welcome to the Pantry</h1>
      </header>
      <Link href="/signup">Signup</Link>
    </main>
  );
}
