'use client'
import styled from "styled-components";

export const PageContainer = styled.div`
  width: 1200px;
  margin: auto;
  padding-top: 120px;
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

export const ImageContainer = styled.img<{cornerRadius?: number, imageWidth: number}>`
  max-width: ${(props) => props.imageWidth ? `${props.imageWidth}px` : '0'};
  width: 100%;
  border-radius: ${(props) => props.cornerRadius ? `${props.cornerRadius}px` : '0'};
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