import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-black flex justify-center items-center h-[60px]">
      <nav className="flex gap-[40px]">
        <Link className="text-white hover:text-white/50 transition-colors" href="/">
          Home
        </Link>
        <Link className="text-white hover:text-white/50 transition-colors" href="/about">
          About
        </Link>
      </nav>
    </header>
  );
};

export default Header;
