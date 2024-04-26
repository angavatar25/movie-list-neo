'use client'
import { MovieCardContainer, MovieImage, MovieLikeButton, MoviePoster, MovieTitle } from "@/styling/StyledComponents/StyledMovieCard";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

interface IMovieCard {
  onClick: (id: number) => void;
  addToFavourite(): void;
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
        {/* {props.isFavourite ?
        (<HeartFilled
          style={{ color: '#FC0040' }}
          onClick={props.addToFavourite}
        />
        ) : <HeartOutlined />} */}
        <HeartOutlined
          style={{ color: props.isFavourite ? '#FC0040' : '#FFF'}}
          onClick={props.addToFavourite}
        />
      </MovieCardContainer>
    </>
  )
}

export default MovieCard;