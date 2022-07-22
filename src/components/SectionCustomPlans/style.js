import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0 8.125rem;
  
  position: relative; //Para remover a sobreposição do bloco de gradiente utilizado no Hero
`

export const Wrapper = styled.section`
  width: 100%;
  max-width: 72.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Infos = styled.div`
  h4 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.5;
    color: #3B454F;
  }

  ul {
    list-style-type: none;
    margin-top: 1.5rem;

    li {
      display: flex;
      align-items: center;

      & + li {
        margin-top: 1.375rem;
      }

      p {
        font-size: 1.125rem;
        color: #3B454F;
      }

      span {
        display: inline-block;
        width: 2.25rem;

        color: #83AF38;
        font-size: 2.5rem;
        font-weight: 700;

        margin-right: 0.75rem;
      }
    }
  }

  > p {
    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5;
    color: #83AF38;

    margin-top: 2rem;
  }
`