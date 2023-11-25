import Link from 'next/link';
import Container from './Container';

const Header = () => {
  return (
    <header className="bg-black">
      <Container>
        <nav className="flex justify-center items-center ">
          <Link className="text-white" href="/">
            Home
          </Link>
          <Link className="text-white" href="/blog">
            Blog
          </Link>
          <Link className="text-white" href="/about">
            About
          </Link>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
