import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 70.625rem;

  margin: 1rem auto 5.125rem;
  position: relative;

  h4 {
    text-align: center;
    font-size: 2.25rem;
    font-weight: 700;
    color: #3B454F;
  }
`

export const BoxCustomButton = styled.div`
  position: absolute;
  bottom: 1.875rem;
  left: 50%;
  transform: translateX(-50%);
`

export const BoxInfos = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 4.5rem;
`

export const AccordionList = styled.div`
  width: 100%;
  max-width: 25.875rem;
  height: 100%;
  min-height: 26.75rem;
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
