import styled from 'styled-components'

import HeroBackground from '../../../assets/hero_background.jpg'

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  background: url(${HeroBackground}) no-repeat center center;
  background-size: cover;

  padding: 4.375rem 0 5.625rem;
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
  }

  > div {
    width: 100%;
    max-width: 23.625rem;
    margin-top: 16rem;
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