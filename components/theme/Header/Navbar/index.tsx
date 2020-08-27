import Link from 'next/link';
import { Container } from '../../../common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper } from './styles';

const Navbar = () => (
  <Wrapper as={Container}>
    <Link href='/'>
      <a>Isaiah Awotide</a>
    </Link>
    <NavbarLinks desktop={true} />
  </Wrapper>
);

export default Navbar;