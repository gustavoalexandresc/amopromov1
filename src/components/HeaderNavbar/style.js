import styled from 'styled-components'

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 0;
  background: #006E3E;

  nav {
    width: 100%;
    max-width: 74.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav > button {
    display: flex;
    align-items: baseline;
    gap: 0.25rem;

    background: transparent;
    border: none;
    line-height: 0;

    transition: filter 0.2s;

    span {
      font-size: 1rem;
      font-weight: 600;
      color: #FFFFFF;
    }

    &:hover {
      filter: opacity(0.8);
    }
  }
`

export const Menu = styled.ul`
  list-style-type: none;

  li {
    color: #FFFFFF;
    font-weight: 600;

    padding: 0.5rem 1rem;
    border: 1px solid transparent;

    float: left;

    transition: 0.2s;

    & + li {
      margin-left: 0.375rem;
    }

    &:hover {
      border: 1px solid #FFD012;
      border-radius: 4px;
    }
  }

`