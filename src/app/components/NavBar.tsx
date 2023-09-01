import Image from "next/image";
import Link from "next/link";

export default function Navbar(): JSX.Element {
  return (
    <header className="bg-stone-200 drop-shadow-xl flex flex-row  py-5 justify-around">
      <div className="flex flex-row">
        <Image
          src="/globe.svg"
          width={50}
          height={50}
          alt="A solid black globe icon"
        />

        <Link
          className="my-auto"
          href="/"
        >
          <h1 className="text-2xl">Worldly</h1>
        </Link>
      </div>
      <nav className="my-auto">
        <ul className="flex flex-row gap-6">
          <li className="hover:underline hover:opacity-80 ease-in">
            <Link href="/signup">Sign Up</Link>
          </li>
          <li className="hover:underline hover:opacity-80 ease-in">
            <Link href="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
