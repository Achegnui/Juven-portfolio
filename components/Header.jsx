import Link from "next/link";
import { Button } from "./ui/Button";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 classname="text-4xl font-semibold">
            Juven<span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button
         */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>

          {/* moblie nav */}
          <div className="xl:hidden">mobile nav</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
