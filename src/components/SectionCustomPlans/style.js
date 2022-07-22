import styled from 'styled-components'
import { Devices } from '../../utils/devices'

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2.5rem 0 8.125rem;
  padding: 0 1rem;
  
  position: relative; //Para remover a sobreposição do bloco de gradiente utilizado no Hero

  @media (${Devices.tablet}) {
    margin: 1.875rem 0 0;
    padding: 0;
  }
`

export const Wrapper = styled.section`
  width: 100%;
  max-width: 72.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (${Devices.tablet}) {
    flex-direction: column-reverse;
    position: relative;
    padding-bottom: 5.25rem;
  }

  > img {
    @media (${Devices.tablet}) {
      margin-top: 2.5rem;
      padding: 0 1rem;
      width: 100%;
      object-fit: cover;
    }
  }
`

export const Infos = styled.div`
  h4 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.5;
    color: #3B454F;

    @media (${Devices.tablet}) {
      text-align: center;
      font-size: 1.5rem;
      padding: 0 1rem;
    }
  }

  ul {
    list-style-type: none;
    margin-top: 1.5rem;

    @media (${Devices.tablet}) {
      margin: 1rem 1.5rem 0;
    }

    li {
      display: flex;
      align-items: center;

      & + li {
        margin-top: 1.375rem;
      }

      p {
        font-size: 1.125rem;
        color: #3B454F;

        @media (${Devices.tablet}) {
          font-size: 1rem;
        }
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

    @media (${Devices.tablet}) {
      text-align: center;
      font-size: 1.25rem;
      padding: 0 1rem;

      margin-top: 2.125rem;
    }
  }
`

export const ButtonBox = styled.div`
  margin-top: 2rem;

  @media (${Devices.tablet}) {
    width: 100%;
    display: flex;
    justify-content: center;
  
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);

    margin-top: unset;
  }
`