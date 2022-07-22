import { ColorDivider } from "../shared/ColorDivider";

import SegurosPromoAltImage from '../../assets/segurospromo_alt.png'

import CelphoneIcon from '../../assets/icons/celphone_alt.png'
import WhatsappIcon from '../../assets/icons/whatsapp_alt.png'
import EnvelopeIcon from '../../assets/icons/envelope.png'

import FacebookImage from '../../assets/logos/facebook.png'
import TwitterImage from '../../assets/logos/twitter.png'
import InstagramImage from '../../assets/logos/instagram.png'

import MasterCardImage from '../../assets/logos/mastercard.png'
import VisaCardImage from '../../assets/logos/visa.png'
import AmericanExpressCardImage from '../../assets/logos/americanexpress.png'
import EloCardImage from '../../assets/logos/elo.png'
import DinersClubCardImage from '../../assets/logos/dinersclub.png'
import HiperCardImage from '../../assets/logos/hipercard.png'

import BoletoImage from '../../assets/logos/boleto.png'
import TagDescontoImage from '../../assets/logos/tag_5desconto.png'

import BBBankImage from '../../assets/logos/bb.png'
import BradescoBankImage from '../../assets/logos/bradesco.png'
import ItauBankImage from '../../assets/logos/itau.png'
import SantanderBankImage from '../../assets/logos/santander.png'
import OriginalBankImage from '../../assets/logos/original.png'
import InterBankImage from '../../assets/logos/inter.png'
import BS2BankImage from '../../assets/logos/bs2.png'

import PixImage from '../../assets/logos/pix.png'

import LogosImage from '../../assets/logos/logos_rodape.png'

import { AccordionList, ContactButtonsList, Container, Infos, LogoBox, PaymentBox, PaymentType, SocialBox, Wrapper } from "./style";
import { CustomButton } from "../shared/Button";
import { Accordion } from "../shared/Accordion";

const MOCK_LOREIPSUM = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries";

export function Footer() {
  return (
    <Container>
      <ColorDivider />
      <Wrapper>
        <LogoBox>
          <img src={SegurosPromoAltImage} alt="SegurosPromo" />
        </LogoBox>

        <SocialBox>
          <a href="#"><img src={FacebookImage} alt="Facebook" /></a>
          <a href="#"><img src={TwitterImage} alt="Twitter" /></a>
          <a href="#"><img src={InstagramImage} alt="Instagram" /></a>
        </SocialBox>

        <ContactButtonsList>
          <h6>CENTRAL DE VENDAS:</h6>

          <div>
            <CustomButton theme="footer" fontWeight={400}>
              <img src={CelphoneIcon} alt="Telefone" />
              (31) 4000-1667
            </CustomButton>

            <CustomButton theme="footer" fontWeight={400}>
              <img src={WhatsappIcon} alt="Whatsapp" />
              (31) 98204-2542
            </CustomButton>
          </div>
        </ContactButtonsList>

        <ContactButtonsList>
          <h6>ATENDIMENTO:</h6>

          <div>
            <CustomButton theme="footer" fontWeight={400}>
              <img src={CelphoneIcon} alt="Telefone" />
              (31) 4000-1667
            </CustomButton>

            <CustomButton theme="footer" fontWeight={400}>
              Central de Ajuda
            </CustomButton>

            <CustomButton
              theme="footer"
              flexDirection="column"
              fontSize="0.75rem"
              fontWeight={600}
            >
              <img src={EnvelopeIcon} alt="E-mail" />
              atendimento@segurospromo.com.br
            </CustomButton>
          </div>
        </ContactButtonsList>

        <AccordionList>
          <Accordion theme="footer" title="SEGUROS">
            <ul>
              <li>Seguro Viagem América do Norte</li>
              <li>Seguro Viagem Europa</li>
              <li>Seguro Viagem América do Sul</li>
              <li>Seguro Viagem América Central</li>
              <li>Seguro Viagem África</li>
              <li>Seguro Viagem Ásia</li>
              <li>Seguro Viagem Internacional</li>
              <li>Seguro Viagem Nacional</li>
              <li>Seguro Viagem Oceania</li>
              <li>Seguro Viagem Oriente Médio</li>
              <li>Seguro Viagem Cruzeiro</li>
              <li>Seguro de Vida</li>
            </ul>
          </Accordion>
          <Accordion theme="footer" title="QUEM SOMOS" content={MOCK_LOREIPSUM} />
          <Accordion theme="footer" title="SEGURADORAS" content={MOCK_LOREIPSUM} />
          <Accordion theme="footer" title="BLOG" content={MOCK_LOREIPSUM} />
        </AccordionList>

        <PaymentBox>
          <h6>FORMAS DE PAGAMENTO:</h6>

          <PaymentType>
            <p>Crédito em até 12 vezes</p>
            <div>
              <img src={MasterCardImage} alt="MasterCard" />
              <img src={VisaCardImage} alt="Visa" />
              <img src={AmericanExpressCardImage} alt="American Express" />
              <img src={EloCardImage} alt="Elo" />
              <img src={DinersClubCardImage} alt="Diners Club" />
              <img src={HiperCardImage} alt="Hiper" />
            </div>
          </PaymentType>

          <PaymentType>
            <p>Boleto bancário</p>
            <div>
              <img src={BoletoImage} alt="Boleto" />
              <img src={TagDescontoImage} alt="5% de Desconto" />
            </div>
          </PaymentType>

          <PaymentType>
            <p>Transferência bancária</p>
            <div>
              <img src={BBBankImage} alt="Banco do Brasil" />
              <img src={BradescoBankImage} alt="Banco Bradesco" />
              <img src={ItauBankImage} alt="Banco Itaú" />
              <img src={SantanderBankImage} alt="Banco Santander" />
              <img src={OriginalBankImage} alt="Banco Original" />
              <img src={InterBankImage} alt="Banco Inter" />
              <img src={BS2BankImage} alt="Banco Bs2" />
            </div>
          </PaymentType>

          <PaymentType>
            <p>Pagamento com pix</p>
            <div>
              <img src={PixImage} alt="Pix" />
            </div>
          </PaymentType>

        </PaymentBox>

        <Infos>
          <p>
            2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbiras, nº 1.532, 10º andar - Belo Horizonte - MG © 2017 Seguros Promo - Emitir Shop | By - 2XT Tecnologia
          </p>
          <img src={LogosImage} />
        </Infos>
      </Wrapper>
    </Container>
  )
}