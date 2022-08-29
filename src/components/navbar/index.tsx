import { useRouter } from 'next/router';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavLink,
  NavMenu,
  NavItem,
  ConnectWalletBtn,
  ButtonWrapper,
} from './styled';
import logo from '../../../public/buidl1.svg';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo src={logo} />
        <NavMenu>
          <NavItem>
            <Link href='/projects' passHref>
              <NavLink
                className={router.pathname == '/projects' ? 'active' : ''}
              >
                Projects
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/buidl1' passHref>
              <NavLink className={router.pathname == '/buidl1' ? 'active' : ''}>
                Buidl1
              </NavLink>
            </Link>
          </NavItem>
          <NavItem>
            <Link href='/assets' passHref>
              <NavLink className={router.pathname == '/assets' ? 'active' : ''}>
                My assets
              </NavLink>
            </Link>
          </NavItem>
        </NavMenu>

        <ButtonWrapper>
          <ConnectWalletBtn>Connect wallet</ConnectWalletBtn>
        </ButtonWrapper>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
