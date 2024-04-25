'use client'
import { MovieCardContainer, MovieLikeButton, MovieTitle } from "@/styling/StyledComponents/StyledMovieCard";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

interface IMovieCard {
  onClick?(): void;
}

const MovieCard = (props: IMovieCard) => {
  const movieLiked = false;

  return (
    <>    
      <MovieCardContainer>
        <img
          onClick={props.onClick}
          style={{width: '100%'}}
          src="https://i.pinimg.com/736x/f8/00/0e/f8000e8710ffebd75da1042cf6106993.jpg"
          alt=""
        />
        <MovieTitle fontSize={12}>
          Mission Impossible
        </MovieTitle>
        {movieLiked ? <HeartFilled style={{ color: '#FC0040' }} /> : <HeartOutlined />}
      </MovieCardContainer>
    </>
  )
}

export default MovieCard;