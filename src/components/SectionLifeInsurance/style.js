import styled from 'styled-components'
import { Devices } from '../../utils/devices'

export const Container = styled.section`
  width: 100%;
  padding: 0 1rem;

  @media (${Devices.tablet}) {
    padding: 0;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 70.625rem;

  margin: 1rem auto 5.125rem;
  position: relative;

  @media (${Devices.tablet}) {
    margin: 1rem auto 3.75rem;
  }

  h4 {
    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
    color: #3B454F;

    @media (${Devices.tablet}) {
      width: 100%;
      font-size: 1.5rem;
      padding: 0 1rem;
      position: absolute;
      top: 38%;
    }

    @media (${Devices.mobile500}) {
      top: 30%;
    }
  }
`

export const BoxCustomButton = styled.div`
  position: absolute;
  bottom: 1.875rem;
  left: 50%;
  transform: translateX(-50%);

  @media (${Devices.tablet}) {
    display: flex;
    justify-content: center;

    position: relative;
    bottom: unset;

    margin-top: 3rem;
  }
`

export const BoxInfos = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 4.5rem;

  @media (${Devices.tablet}) {
    margin-top: 0;
    flex-direction: column-reverse;
    align-items: center;
  }

  > div > img {
    width: 100%;
    max-width: 31.25rem;
    object-fit: cover;

    @media (${Devices.tablet}) {
      padding: 0 1rem;
    }
  }
`

export const AccordionList = styled.div`
  width: 100%;
  max-width: 25.875rem;
  height: 100%;
  min-height: 26.75rem;

  @media (${Devices.tablet}) {
    max-width: unset;
    min-height: unset;
    padding: 5rem 1rem 0;
  }
`
export const LoadingMessage = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #3B454F;
`

export const ErrorMessage = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  color: #83AF38;
`
