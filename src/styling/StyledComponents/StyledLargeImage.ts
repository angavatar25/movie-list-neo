import styled from "styled-components";

export const LargeImageContainer = styled.div`
  background-color: rgba(0,0,0, 0.6);
  width: 100%;
  min-height: 100vh;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LargeImageStyling = styled.img`
  max-width: 500px;
  width: 100%;
`

export const CloseCircleContainer = styled.button`
  position: absolute;
  top: 50px;
  right: 50px;
  font-size: 30px;
  background-color: transparent;
  border: none;
  @media screen and (max-width: 640px) {
    top: 30px;
    right: 30px;
  }
`