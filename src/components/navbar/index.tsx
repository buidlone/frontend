import { useRouter } from 'next/router';
import { ConnetWalletBtn, StyledNavBar } from './styled';
import logo from '../../../public/buidl1.svg';
import Link from 'next/link';
import Image from 'next/image';
import Projects from '../../../pages/projects';

const Navbar = () => {
  const router = useRouter();

  return (
    <StyledNavBar>
      <Image src={logo} alt={''} width={'120'} />
      <div>
        <Link href='/projects' passHref>
          <a className={router.pathname == '/projects' ? 'active' : ''}>
            Projects
          </a>
        </Link>
        <Link href='/buidl1' passHref>
          <a className={router.pathname == '/buidl1' ? 'active' : ''}>Buidl1</a>
        </Link>
        <Link href='/assets' passHref>
          <a className={router.pathname == '/assets' ? 'active' : ''}>
            My assets
          </a>
        </Link>
      </div>
      <ConnetWalletBtn>Connect wallet</ConnetWalletBtn>
    </StyledNavBar>
  );
};

export default Navbar;
