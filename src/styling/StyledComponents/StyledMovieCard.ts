'use client'
import styled from "styled-components";

export const MovieCardContainer = styled.div`
  max-width: 250px;
  width: 100%;
  margin-bottom: 30px;
`

export const MovieTitle = styled.p<{ fontSize?: number }>`
  color: #fff;
  font-size: ${(props) => props.fontSize ? `${props.fontSize}px` : '16px'};
  font-weight: 700;
  padding: 15px 0;
`

export const MovieLikeButton = styled.button<{ movieLiked: boolean }>`
  background-color: ${(props) => props.movieLiked ? '#FC0040' : 'transparent'};
  border: ${(props) => props.movieLiked ? 'none' : '1px solid #fff'};;
  font-size: 14px;
  padding: 5px 15px;
  border-radius: 6px;
  &:hover {
    background-color: #FC0040;
    border: none;
  }
`