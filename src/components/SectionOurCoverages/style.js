import styled from 'styled-components'
import { Devices } from '../../utils/devices'

export const Container = styled.section`
  background: #F8F8F8;
  padding: 4rem 0 5rem;

  @media (${Devices.tablet}) {
    background: #FFFFFF;
    padding: 1.875rem 0;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 64rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;

  > h4 {
    font-size: 2.25rem;
    font-weight: 700;
    color: #3B454F;

    @media (${Devices.tablet}) {
      text-align: center;
      font-size: 1.5rem;
      padding: 0 1rem;
    }
  }

  > p {
    font-size: 1.25rem;
    line-height: 1.5;
    color: #3B454F;

    margin-top: 2.125rem;

    @media (${Devices.tablet}) {
      text-align: center;
      font-size: 1rem;
      margin-top: 1rem;
      padding: 0 1rem;
    }
  }

`

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  flex-wrap: wrap;

  margin: 3.75rem 0 4rem;

  @media (${Devices.tablet}) {
    flex-direction: column;
    margin: 1.5rem 0 2.5rem;
    padding: 0 1rem;
  }
`