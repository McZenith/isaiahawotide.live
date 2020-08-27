import Link from 'next/link';
import { Wrapper } from './styles';

export interface NavBarLinksProps {
  desktop: Boolean;
}

const NavBarLinks: React.SFC<NavBarLinksProps> = ({ desktop }) => {
  return (
    <Wrapper desktop={desktop}>
      <>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/#about'>
          <a>About</a>
        </Link>
        <Link href='/#projects'>
          <a>Projects</a>
        </Link>
        <Link href='/#contact'>
          <a>Contact</a>
        </Link>
      </>
    </Wrapper>
  );
};

export default NavBarLinks;
