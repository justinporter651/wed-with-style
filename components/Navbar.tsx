import Link from 'next/link';
import NavbarModal from './navbarModal';
import {FC, MouseEventHandler, MutableRefObject, useState} from 'react';
import {AnimatePresence} from 'framer-motion';

interface NavBarProps {
  Number: Number;
  clickhandle: MouseEventHandler;
}

const Navbar: FC<NavBarProps> = ({Number, clickhandle}) => {
  const [navOpen, setNavOpen] = useState(false);
  const close = () => {
    setNavOpen(false);
  };
  const open = () => {
    setNavOpen(true);
  };
  return (
    <div
      data-animation='default'
      data-collapse='medium'
      data-duration={400}
      data-easing='ease'
      data-easing2='ease'
      role='banner'
      className={
        Number == 0
          ? 'navbar-logo-left-container transparent shadow-three w-nav'
          : 'navbar-logo-left-container shadow-three w-nav'
      }
    >
      <div className='container'>
        <div className='navbar-wrapper'>
          <Link href='/' className='navbar-brand w-nav-brand'>
            <img src='images/WWSLOGO.png' alt='' loading='lazy' className='image-4' />
          </Link>
          <nav role='navigation' className='nav-menu-wrapper w-nav-menu'>
            <ul role='list' className='nav-menu-two w-list-unstyled'>
              <li>
                <Link href='/meet' className='nav-link'>
                  Meet Me
                </Link>
              </li>
              <li>
                <Link href='/galleries' className='nav-link'>
                  Galleries
                </Link>
              </li>
              <li>
                <Link href='/sweetwords' className='nav-link'>
                  Sweet Words
                </Link>
              </li>
              <li>
                <div className='nav-divider' />
              </li>
              <li className='mobile-margin-top-10'>
                <p className='navbutton w-button' onClick={clickhandle}>
                  Inquire Now
                </p>
              </li>
            </ul>
          </nav>
          <div className='menu-button w-nav-button'>
            <div
              className='w-icon-nav-menu'
              onClick={() => {
                navOpen ? close() : open();
              }}
            />
          </div>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {navOpen && <NavbarModal modalOpen={navOpen} handleClose={close} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
