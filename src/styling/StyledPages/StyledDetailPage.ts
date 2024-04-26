'use client'
import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const CastContainer = styled.div`
  margin-top: 50px;
`

export const MovieDetailContainer = styled.div<{gap: number}>`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: ${(props) => props.gap ? `${props.gap}px` : '0'};
  @media screen and (max-width: 640px) {
    display: grid;
  }
`

export const CastTitle = styled.p<{margin: number}>`
  margin-bottom: ${(props) => props.margin ? `${props.margin}px` : '0'};
  text-transform: uppercase;
`

export const BackToListButton = styled.button<{gap: number}>`
  display: flex;
  justify-items: center;
  align-items: center;
  gap: ${(props) => props.gap ? `${props.gap}px` : '0'};
  margin-bottom: 20px;
  background: none;
  border: none;
  font-size: 20px;
`