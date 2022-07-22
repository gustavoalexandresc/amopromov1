import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 20.5rem;
  height: auto;
  max-height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background: #FFFFFF;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.15);

  h6 {
    font-size: 1rem;
    font-weight: 700;
    color: #33794A;
  }

  p {
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.5;
    color: #737D86;
  }

  button {
    font-size: 0.625rem;
    font-weight: 700;
    color: #33794A;
    text-decoration: underline;

    padding: 0.625rem 1.25rem;

    border: 0;
    border-radius: 100px;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #60C742;

    margin-top: auto;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`