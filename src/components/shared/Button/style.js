import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.375rem;

  flex-direction: ${({ flexDirection }) => flexDirection ? flexDirection : 'row'};

  background: #33794A;
  border: 0;

  ${({ theme }) => theme === 'footer' ? css`
    border-radius: 8px;
  ` : css`
    border-radius: 100px;
  `}
  
  font-size: ${({ fontSize }) => fontSize ? fontSize : '1.125rem'};
  font-weight: ${({ fontWeight }) => fontWeight ? fontWeight : '700'};
  color: #FFFFFF;

  padding: 0.75rem 2.125rem;

  transition: filter 0.3s;

  box-shadow: 0 5.96002px 11.92px rgba(0, 0, 0, 0.15);

  &:hover {
    filter: brightness(0.9);
  }
`