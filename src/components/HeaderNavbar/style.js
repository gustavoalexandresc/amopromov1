import styled, { css } from 'styled-components'
import { Devices } from '../../utils/devices'

export const Header = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1.5rem 0;
  background: #006E3E;

  @media (${Devices.mobile}) {
    padding: 1rem 0.625rem;
  }

  nav > a > img {
    @media (${Devices.mobile}) {
      width: 100%;
      max-width: 8.375rem;

      z-index: 100;
    }
  }

  nav {
    width: 100%;
    max-width: 74.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`

export const ResponsiveMenuButton = styled.button`
  display: none;
  background: transparent;
  border: 0;
  outline: none;

  @media (${Devices.mobile}) {
    display: flex;
    align-items: center;

    font-size: 0.875rem;
    font-weight: 700;
    color: #FFFFFF;

    z-index: 100;

    ${({ isOpenMenu }) => isOpenMenu && css`
      img {
        transform: rotateX(180deg);
      }
    `}
  }
`

export const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (${Devices.mobile}) {
    ${({ isOpenMenu }) => isOpenMenu ? css`
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      flex-direction: column;

      background: #006E3E;
      z-index: 99;
    ` : css`
      display: none;
    `}
  }

  a {
    text-decoration: none;
  }

  li {
    color: #FFFFFF;
    font-weight: 600;

    padding: 0.5rem 1rem;
    border: 1px solid transparent;

    transition: 0.2s;

    & + li {
      margin-left: 0.375rem;
    }

    &:hover {
      border: 1px solid #FFD012;
      border-radius: 4px;
    }

    @media (${Devices.mobile}) {
      font-size: 1.125rem;
    }
  }
`

export const RestrictAreaButton = styled.button`
  display: flex;
  align-items: baseline;
  gap: 0.25rem;

  background: transparent;
  border: none;
  line-height: 0;

  transition: filter 0.2s;

  @media (${Devices.mobile}) {
    ${({ isOpenMenu }) => isOpenMenu ? css`
      position: absolute;
      bottom: 2.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 100;
    ` : css`
      display: none;
    `}
  }

  span {
    font-size: 1rem;
    font-weight: 600;
    color: #FFFFFF;
  }

  &:hover {
    filter: opacity(0.8);
  }
`