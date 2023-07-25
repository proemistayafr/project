import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";

const Navbar = () => {
  const scrolled = useScroll(50);

  return (
<>
<div
        className={`fixed top-0 w-full flex justify-center ${
          scrolled
            ? "border-b border-black bg-black/50 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/klogo.png"
              alt="Zerttesh logo"
              width= "550"
              height="550"
              className="mr-2 rounded-sm"
              priority={false}
            />

          </Link>
        </div>
    </div>
</>
  
  );    
  }

  export default Navbar;