import styled from 'styled-components'
import { Devices } from '../../utils/devices'

import HeroBackground from '../../assets/hero_background.jpg'
import { CustomButton } from '../shared/Button'

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), 
              url(${HeroBackground}) no-repeat center center;
  background-size: cover;

  padding: 4.375rem 0 5.625rem;

  @media (${Devices.tablet}) {
    height: 100%;
    min-height: 30.875rem;
    padding: 1.25rem 0;
  }
`
export const Wrapper = styled.div`
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    width: 100%;
    max-width: 33.625rem;

    font-size: 3rem;
    font-weight: 700;
    line-height: 1.25;
    color: #3B454F;

    @media (${Devices.tablet}) {
      font-size: 2rem;

      max-width: 18.375rem;
      padding: 0 1rem;
    }
  }

  > div {
    width: 100%;
    max-width: 23.625rem;
    margin-top: 16rem;

    @media (${Devices.tablet}) {
      margin-top: 2.75rem;
      padding: 0 0.75rem;
    }
  }

  p {
    font-size: 1.125rem;
    line-height: 1.5;
    color: #FFFFFF;
  }
`

export const BottomGradient = styled.div`
  width: 100%;
  height: 9.875rem;
  background: linear-gradient(360deg, #FFFFFF 70.88%, rgba(218, 226, 228, 0) 92.31%);

  position: absolute;
  bottom: -6.625rem;
`

export const ButtonBox = styled.div`
  margin-top: 2rem;

  @media (${Devices.tablet}) {
    width: 100%;
    display: flex;
    justify-content: center;

    position: absolute;
    bottom: -0.75rem;
    left: 50%;
    transform: translateX(-50%);

    margin-top: unset;

    z-index: 2;
  }
`