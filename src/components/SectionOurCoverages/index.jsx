import { CustomButton } from "../shared/Button";
import { Card } from "./Card";
import { Container, Wrapper, CardWrapper } from "./style";

import AngelIcon from '../../../assets/icons/angel.png';
import WheelchairIcon from '../../../assets/icons/wheelchair.png';
import CandlestickIcon from '../../../assets/icons/candlestick.png';
import CoinsIcon from '../../../assets/icons/coins.png';

export function SectionOurCoverages() {
  return (
    <Container>
      <Wrapper>
        <h4>Nossas coberturas</h4>
        <p>Veja mais detalhes de cada proteção!</p>
        <CardWrapper>
          <Card
            imageUrl={AngelIcon}
            title="Morte"
            description="Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado."
            onClick={console.log('CTA')}
          />
          <Card
            imageUrl={WheelchairIcon}
            title="Invalidez por acidente"
            description="Caso a pessoa segurada sofra um acidente que a torne permanentemente inválida, seja total ou parcialmente, essa pessoa recebe uma uma indenização no valor contratado"
            onClick={console.log('CTA')}
          />
          <Card
            imageUrl={CandlestickIcon}
            title="Assistência funeral"
            description="No caso do falecimento da pessoa segurada, a pessoa beneficiária recebe assistência para a realização do funeral ou cremação"
            onClick={console.log('CTA')}
          />
          <Card
            imageUrl={CoinsIcon}
            title="Sorteios mensais de 10 mil reais"
            description="A pessoa segurada concorre a sorteios de R$10.000 todo mês enquanto continuar com seu o plano ativo"
            onClick={console.log('CTA')}
          />
        </CardWrapper>
        <CustomButton>Faça sua cotação</CustomButton>
      </Wrapper>
    </Container>
  )
}