import { useEffect, useState } from 'react'

import { Accordion } from '../shared/Accordion'
import { CustomButton } from '../shared/Button'

import RelationshipImage from '../../assets/relationship.png'

import { Container, Wrapper, BoxInfos, AccordionList, BoxCustomButton, LoadingMessage, ErrorMessage } from './style'

export function SectionLifeInsurance() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [accordionContent, setAccordionContent] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch('https://stark-cove-48986.herokuapp.com/seguros/motivos')
      .then(response => response.json())
      .then(json => setAccordionContent(json))
      .catch(error => {
        console.error('Falha ao carregar os dados: ', error)
        setHasError(true);
      });

    setLoading(false);
  }, [])

  return (
    <Container>
      <Wrapper>
        <h4>Mas por que ter um seguro de vida?</h4>
        <BoxInfos>
          <AccordionList>
            {loading ? (
              <LoadingMessage>Carregando dados...</LoadingMessage>
            ) : hasError ? (
              <ErrorMessage>Erro no carregamento dos dados</ErrorMessage>
            ) : (
              accordionContent.map((content, index) => (
                <Accordion
                  key={index}
                  title={content.title ?? ''}
                  content={content.text ?? ''}
                />
              ))
            )}
          </AccordionList>
          <div>
            <img src={RelationshipImage} />
          </div>
        </BoxInfos>
        <BoxCustomButton>
          <CustomButton>
            Faça sua cotação
          </CustomButton>
        </BoxCustomButton>
      </Wrapper>
    </Container>
  )
}