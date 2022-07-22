import { CustomButton } from "../shared/Button";

import ComputerAndCelphoneImage from '../../../assets/computerAndCelphone.png'

import { Container, Wrapper, Infos, ButtonBox } from "./style";

export function SectionCustomPlans() {
  return (
    <Container>
      <Wrapper>
        <img src={ComputerAndCelphoneImage} alt="Imagem de Computador e Telefone" />
        <Infos>
          <h4>
            Planos personalizados e sem burocracia
          </h4>
          <ul>
            <li>
              <span>1.</span> <p>Informe seus dados</p>
            </li>
            <li>
              <span>2.</span> <p>Descubra o plano ideal para o seu perfil</p>
            </li>
            <li>
              <span>3.</span> <p>Escolha sua forma de pagamento e contrate 100% online</p>
            </li>
          </ul>
          <p>
            Pronto! Agora você e sua família têm todos os benefícios de viver com segurança total
          </p>
          <ButtonBox>
            <CustomButton>Faça sua cotação</CustomButton>
          </ButtonBox>
        </Infos>
      </Wrapper>
    </Container>
  )
}