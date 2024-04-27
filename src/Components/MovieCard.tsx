'use client'
import { MovieCardContainer, MovieImage, MovieLikeButton, MoviePoster, MovieTitle } from "@/styling/StyledComponents/StyledMovieCard";
import { DeleteOutlined, HeartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

interface IMovieCard {
  onClick: (id: number) => void;
  addToFavourite?(): void;
  removeFavourite?(): void;
  id: number;
  name: string;
  image: string;
  isFavourite?: boolean;
}


const MovieCard = (props: IMovieCard) => {
  const handleOnClick = () => {
    if (props.id) {
      props.onClick(props.id);
    }
  }

  return (
    <>    
      <MovieCardContainer>
        <MoviePoster
          onClick={handleOnClick}
        >
          <MovieImage
            src={props.image}
            alt=""
          />
        </MoviePoster>
        <MovieTitle fontSize={12}>
          {props.name}
        </MovieTitle>
        {props.isFavourite ?
        (<DeleteOutlined
          style={{ color: '#FC0040' }}
          onClick={props.removeFavourite}
        />
        ) : 
          <HeartOutlined
            onClick={props.addToFavourite}
          />}
      </MovieCardContainer>
    </>
  )
}

export default MovieCard;