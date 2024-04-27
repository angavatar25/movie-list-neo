import styled from "styled-components";

export const PageContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  padding-top: 120px;
  @media screen and (max-width: 1200px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`

export const FlexCenter = styled.div<{gap?: number}>`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: ${(props) => props.gap ? `${props.gap}px` : '0'};
`

export const FlexColumn = styled.div<{gap?: number}>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.gap ? `${props.gap}px` : '0'};
`

export const ImageContainer = styled.img<{radius?: number, width: number}>`
  max-width: ${(props) => props.width ? `${props.width}px` : '0'};
  width: 100%;
  border-radius: ${(props) => props.radius ? `${props.radius}px` : '0'};
`

export const Circle = styled.div<{width: number}>`
  width: ${(props) => props.width ? `${props.width}px` : '0'};
  height: ${(props) => props.width ? `${props.width}px` : '0'};
  background-color: #fff;
  border-radius: 999px;
  margin: auto 0;
`

export const MarginBottom = styled.div<{margin: number}>`
  margin-bottom: ${(props) => props.margin ? `${props.margin}px` : '0'};
`

export const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: inherit;
`