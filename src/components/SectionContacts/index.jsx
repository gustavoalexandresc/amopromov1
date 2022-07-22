import { CustomButton } from "../shared/Button";
import { ButtonBox, Container, Infos, Wrapper } from "./style";

import PhoneIcon from '../../../assets/icons/phone.png'
import WhatsappIcon from '../../../assets/icons/whatsapp.png'

export function SectionContacts() {
  return (
    <Container>
      <Wrapper>
        <h3>Ainda não sabe qual seguro contratar?</h3>
        <Infos>
          <p>Ligue pra gente e receba uma consultoria personalizada gratuitamente!</p>
          <a href="">
            <img src={PhoneIcon} alt="Telefone" />
            (99) 99999.9999
          </a>
          <ButtonBox>
            <CustomButton fontSize="0.75rem" fontWeight={400}>
              <img src={WhatsappIcon} alt="Whatsapp" />
              Se preferir, entre em contato pelo Whatsapp
            </CustomButton>
          </ButtonBox>


          <small>Atendemos pelo telefone de seg. a sex., das 9h às 17h</small>
        </Infos>
      </Wrapper>
    </Container>
  )
}