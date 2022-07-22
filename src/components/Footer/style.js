import styled from "styled-components"

export const Container = styled.footer`
  margin: 4.625rem 0 1rem;

  /**
  * Para remoção do footer em dispositivos maiores
  * Para que fosse possível a inclusão dos dados por search bots
  * não utilizei o display:none
  */
  @media (min-width: 601px) {
    visibility: hidden;
    height: 0;
    max-height: 0;
    padding: 0;
    margin: 0;
    overflow: hidden;
  }
`

export const Wrapper = styled.div`
  padding: 0 1.25rem;
`

export const LogoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  margin-top: 2rem;
`

export const SocialBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  margin-top: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #007E47;
`

export const ContactButtonsList = styled.div`
  margin-top: 0.75rem;

  & + & {
    margin-top: 1.5rem;
  }

  h6 {
    font-size: 1rem;
    color: #435162;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    margin-top: 0.875rem;
  }
`

export const AccordionList = styled.div`
  width: 100%;

  border-top: 1px solid #435162;
  padding-top: 1.25rem;
  margin-top: 2.25rem;

  ul {
    list-style-type: none;
    padding-bottom: 1rem;

    li {
      & + li {
        margin-top: 0.375rem;
      }
    }
  }
`

export const PaymentBox = styled.div`
  margin-top: 1.5rem;

  > h6 {
    font-size: 0.875rem;
    font-weight: 700;
    color: #435162;
  }


`

export const PaymentType = styled.div`
  > p {
    font-size: 0.875rem;
    color: #435162;
    margin-top: 0.75rem;
  }

  > div  {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.625rem;

    margin-top: 1rem;
  }
`

export const Infos = styled.div`
  border-top: 1px solid #007E47;
  padding-top: 1.25rem;
  margin-top: 1.875rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  p {
    font-size: 0.75rem;
    line-height: 1.4;
    color: #435162;
  }

  img {
    width: 100%;
    max-width: 19.375rem;
    object-fit: contain;
    margin-top: 1rem;
  }
`