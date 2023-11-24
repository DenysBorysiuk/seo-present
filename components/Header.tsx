import Link from 'next/link';
import Container from './Container';

const Header = () => {
  return (
    <header className="bg-black">
      <Container>
        <Link className="text-white" href="/">
          Home
        </Link>
        <Link className="text-white" href="/blog">
          Blog
        </Link>
        <Link className="text-white" href="/about">
          About
        </Link>
      </Container>
    </header>
  );
};

export default Header;
