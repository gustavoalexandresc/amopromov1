import Logo from '../../../assets/logo.png'
import UserIcon from '../../../assets/icons/user.png'
import ArrowRightIcon from '../../../assets/icons/arrow_right.png'

import { Header, Menu } from "./style";

export function HeaderNavbar() {
  return (
    <Header>
      <nav>
        <a href="/">
          <img src={Logo} alt="Seguros Promo" />
        </a>
        <Menu>
          <a href="#"><li>Seguro de Vida</li></a>
          <a href="#"><li>Multi-trip</li></a>
          <a href="#"><li>Atendimento</li></a>
          <a href="#"><li>FAQ</li></a>
          <a href="#"><li>Afiliados</li></a>
          <a href="#"><li>Blog</li></a>
        </Menu>
        <button>
          <img src={UserIcon} />
          <span>Área do cliente</span>
          <img src={ArrowRightIcon} />
        </button>
      </nav>
    </Header>
  )
}