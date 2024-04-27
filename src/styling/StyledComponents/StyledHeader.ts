import styled from "styled-components";

export const HeaderContainer = styled.div`
  width: 100%;
  background-color: #090A0E;
  padding: 30px;
  position: fixed;
  top: 0;
  z-index: 10;
`

export const ContentContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const MenuContainer = styled.div`
  display: flex;
  gap: 10px;
  margin: auto 0;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`

export const HamburgerContainer = styled.div`
  margin: auto 0;
  cursor: pointer;
  @media screen and (min-width: 1199px) {
    display: none;
  }
`

export const MenuContainerMobile = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px 0;
  @media screen and (min-width: 1199px) {
    display: none;
  }
`