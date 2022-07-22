import styled from 'styled-components'
import { Devices } from '../../utils/devices'

import WomanBackgroundImage from '../../assets/woman_background.png'
import WomanBackgroundMobileImage from '../../assets/woman_background_mobile.jpg'

export const Container = styled.section`
  width: 100%;

  display: flex;
  align-items: flex-end;

  background: url(${WomanBackgroundImage}) no-repeat center center;
  background-size: cover;

  padding: 4.75rem 3.75rem 1.25rem;

  @media (${Devices.mobile}) {
    background: url(${WomanBackgroundMobileImage}) no-repeat center center;
    background-size: cover;
    padding: 2rem 1rem 2.5rem;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 80vw;
  margin-left: auto;

  display: flex;
  justify-content: space-between;

  @media (${Devices.mobile}) {
    flex-direction: column;
    justify-content: unset;
    max-width: unset;
    height: 100%;
    min-height: 41.25rem;

    position: relative;
  }
  
  h3 {
    width: 100%;
    max-width: 25.875rem;

    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 1.5;
    color: #3B454F;

    @media (${Devices.mobile}) {
      font-size: 1.5rem;
    }
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 28.875rem;
  height: 100%;

  @media (${Devices.mobile}) {
    margin-top: 1rem;
  }

  p {
    text-align: center;

    font-size: 1.25rem;
    font-weight: 700;
    line-height: 1.5;
    color: #3B454F;

    @media (${Devices.mobile}) {
      font-size: 0.75rem;
      font-weight: 400;
      color: #737D86;
    }
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

    @media (${Devices.mobile}) {
      margin-top: 1.25rem;
    }
  }

  small {
    font-size: 0.75rem;
    line-height: 1.5;
    color: #3B454F;

    margin-top: 20.25rem;

    @media (${Devices.mobile}) {
      font-size: 0.625rem;
      margin-top: 1rem;
    }
  }
`

export const ButtonBox = styled.div`
  margin-top: 2rem;

  @media (${Devices.mobile}) {
    display: flex;
    justify-content: center;
    width: 100%;

    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);

    margin-top: unset;
  }
`