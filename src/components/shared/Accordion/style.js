import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${({ theme }) => theme === 'footer' ? css`
    border-bottom: 1px solid #435162;
  ` : css`
    border-bottom: 1px solid #CCD1D6;
  `}
`

export const Title = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  outline: none;
  background: transparent;

  border: none;

  padding: 1.25rem 0;


  p {
    max-width: 90%;
    text-align: start;
    font-size: 0.875rem;
    color: #3B454F;
  }
`

export const BoxIcon = styled.div`
  margin-left: auto;
  transition: transform 0.6s ease;

  &.rotate {
    transform: rotate(90deg);
  }
`

export const ContentBox = styled.div`
  max-height: ${({ contentHeight }) => contentHeight};

  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;

  p {
    font-size: 0.875rem;
    line-height: 1.5;
    color: #3B454F;
    
    margin-bottom: 0.875rem;
  }
`