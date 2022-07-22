import { useEffect, useState } from 'react'

import { Accordion } from '../shared/Accordion'
import { CustomButton } from '../shared/Button'

import RelationshipImage from '../../../assets/relationship.png'

import { Container, Wrapper, BoxInfos, AccordionList, BoxCustomButton, LoadingMessage, ErrorMessage } from './style'

/**
 * Mock da requisição realizada para a url: https://stark-cove-48986.herokuapp.com/seguros/motivos
 * Remover caso não seja utilizado.
 */
const MOCK_FETCH_RESPONSE = '[{"title":"Segurança financeira","text":"Quisque finibus mi mauris, non pellentesque risus efficitur eget. Quisque nec vulputate diam. Suspendisse potenti. Duis id diam quis massa viverra gravida mattis at dui. Nullam faucibus purus a sollicitudin posuere."},{"title":"Custo-benefício","text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis eros, posuere vitae bibendum at, scelerisque ut elit. Phasellus commodo dictum leo interdum placerat. Nulla eget augue ut magna bibendum efficitur."},{"title":"Proteção financeira aos dependentes e ao cônjuge","text":"Etiam ut magna tempus, suscipit ligula sit amet, malesuada leo. Donec ut metus vitae nisl pellentesque placerat. Nullam auctor, elit at scelerisque congue, eros enim mollis mauris, at bibendum leo leo ut tortor."},{"title":"Garantias nas horas em que você mais precisar","text":"Phasellus auctor blandit tortor ut eleifend. Phasellus tempor enim ac ornare interdum. Aliquam viverra leo ac ligula ultrices accumsan."},{"title":"Tranquilidade para o segurado","text":"Vivamus sodales sollicitudin justo, at blandit metus cursus sed. Aenean vestibulum congue elit non lobortis. Etiam porttitor convallis elit, a malesuada lectus tempus eu."}]';

export function SectionLifeInsurance() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [accordionContent, setAccordionContent] = useState([]);

  useEffect(() => {
    setLoading(true);

    /**
     * A URL informada para realizar a requisição está com o CORS ativo não sendo
     * possível receber a resposta. Para continuar o teste fiz o Mock da resposta
     * e abaixo se encontra a requisição fetch que seria feita.
     */
    // fetch('https://stark-cove-48986.herokuapp.com/seguros/motivos')
    //   .then(response => response.json())
    //   .then(json => setAccordionContent(json))
    //   .catch(error => {
    //     console.error('Falha ao carregar os dados: ', error)
    //     setHasError(true);
    //   });

    /**
     * Remover setHasError e setAccordionContent abaixo para não utilizar os dados
     * em mock.
     */
    setHasError(false);
    setAccordionContent(JSON.parse(MOCK_FETCH_RESPONSE));

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
          <img src={RelationshipImage} />
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