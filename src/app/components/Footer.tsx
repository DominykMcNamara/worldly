import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-stone-200 p-4 fixed bottom-0 w-screen">
        <div className="flex flex-row justify-around">
      <div className="flex  flex-row">
      <Image
              src="/globe.svg"
              width={50}
              height={50}
              alt="A solid black globe icon"
            />
       
        <h1 className="text-3xl grid place-content-center">
          
         
        
          Worldly
        </h1>
        </div>
        <div className="flex flex-row justify-center gap-4">
          <Link
            className="no-underline hover:underline "
            href="/"
            data-cy="footer-link"
          >
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
