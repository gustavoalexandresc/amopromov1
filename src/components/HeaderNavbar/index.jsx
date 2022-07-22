import { useEffect, useState } from 'react'

import Logo from '../../assets/logo.png'
import UserIcon from '../../assets/icons/user.png'
import ArrowRightIcon from '../../assets/icons/arrow_right.png'
import CaretFillDownIcon from '../../assets/icons/caret_fill_down.png'

import { Header, Menu, ResponsiveMenuButton, RestrictAreaButton } from "./style"

export function HeaderNavbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  function toggleMenu() {
    setIsOpenMenu(oldState => !oldState);
  }

  useEffect(() => {
    if (isOpenMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpenMenu])

  return (
    <Header isOpenMenu={isOpenMenu}>
      <nav>
        <a href="/">
          <img src={Logo} alt="Seguros Promo" />
        </a>
        <ResponsiveMenuButton onClick={toggleMenu} isOpenMenu={isOpenMenu}>
          Menu
          <img src={CaretFillDownIcon} />
        </ResponsiveMenuButton>
        <Menu isOpenMenu={isOpenMenu}>
          <a href="#"><li>Seguro de Vida</li></a>
          <a href="#"><li>Multi-trip</li></a>
          <a href="#"><li>Atendimento</li></a>
          <a href="#"><li>FAQ</li></a>
          <a href="#"><li>Afiliados</li></a>
          <a href="#"><li>Blog</li></a>
        </Menu>
        <RestrictAreaButton isOpenMenu={isOpenMenu}>
          <img src={UserIcon} />
          <span>Área do cliente</span>
          <img src={ArrowRightIcon} />
        </RestrictAreaButton>
      </nav>
    </Header>
  )
}