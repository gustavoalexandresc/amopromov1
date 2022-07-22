import CelphoneIcon from '../../assets/icons/celphone.png'
import WhatsappIcon from '../../assets/icons/whatsapp.png'

import { Header } from './style'

export function HeaderInfos() {
  return (
    <Header>
      <div>
        <span>CENTRAL DE VENDAS:</span>
        <img src={CelphoneIcon} alt="Celular" />
        <a href="tel:+553140001667">(31) 4000-1667</a>
        <img src={WhatsappIcon} alt="Whatsapp" />
        <a href="https://wa.me/553125342115" target="_blank">(31) 2534-2115</a>
      </div>
    </Header>
  )
}