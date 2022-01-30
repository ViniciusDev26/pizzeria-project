import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { FaShoppingCart, FaBars, FaHome, FaPizzaSlice } from 'react-icons/fa'

import { HeaderContainer, HeaderMenuButton, HeaderNavbar, HeaderNavbarMobile, ListItem } from "./styles";
import Link from "next/link";

function Header() {
  const [homeSelected, setHomeSelected] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);
  const [aboutSelected, setAboutSelected] = useState(false);
  const [openMenuMobile, setOpenMenuMobile] = useState(false);
  const router = useRouter();

  const resetSelected = () => {
    setHomeSelected(false);
    setMenuSelected(false);
    setAboutSelected(false);
  }

  const handleSelected = (selectedState: Dispatch<SetStateAction<boolean>>) => {
    resetSelected();
    setOpenMenuMobile(false);
    selectedState(true);
  }

  useEffect(() => {
    router.pathname === '/' ? setHomeSelected(true) : setHomeSelected(false);
    router.pathname === '/menu' ? setMenuSelected(true) : setMenuSelected(false);
  }, [router]);

  return (
    <HeaderContainer>
      <h2>Gaby&apos;s Pizza</h2>
      
      <HeaderNavbar mobileOpened={openMenuMobile}>
        <ul>
          <ListItem active={homeSelected} onClick={() => handleSelected(setHomeSelected)}>
            <Link href={'/'}>
              <a>
                <FaHome />
                Home
              </a>
            </Link>
          </ListItem>
          <ListItem active={menuSelected} onClick={() => handleSelected(setMenuSelected)}>
            <Link href={'/menu'}>
              <a>
                <FaBars />
                Menu
              </a>
            </Link>
          </ListItem>
          <ListItem active={aboutSelected} onClick={() => handleSelected(setAboutSelected)}>
            <a href="#">
              <FaPizzaSlice />
              About us
            </a>
          </ListItem>
          <ListItem>
            <a href="#">
              <FaShoppingCart/>
              Carrinho
            </a>
          </ListItem>
        </ul>
      </HeaderNavbar>
      
      <HeaderMenuButton onClick={() => setOpenMenuMobile(!openMenuMobile)}> <FaBars size={24}/> </HeaderMenuButton>
    </HeaderContainer>
  )
}

export { Header };