import styled from 'styled-components'

import WomanBackgroundImage from '../../../assets/woman_background.png'

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: flex-end;

  background: url(${WomanBackgroundImage}) no-repeat center center;
  background-size: cover;

  padding: 4.75rem 3.75rem 1.25rem;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 80vw;
  margin-left: auto;

  display: flex;
  justify-content: space-between;
  
  h3 {
    width: 100%;
    max-width: 25.875rem;

    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.5;
    color: #3B454F;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 28.875rem;
  height: 100%;


  p {
    text-align: center;

    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5;
    color: #3B454F;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 1.5rem;
    font-weight: 700;
    color: #83AF38;
    text-decoration: none;

    margin-top: 0.875rem;

    transition: filter 0.2s;

    &:hover {
      filter: opacity(0.8);
    }
  }


  small {
    font-size: 0.75rem;
    line-height: 1.5;
    color: #3B454F;

    margin-top: 20.25rem;
  }
`