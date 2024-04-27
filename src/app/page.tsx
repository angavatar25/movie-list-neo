'use client'

import { PageContainer } from "@/styling/StyledComponents/StyledGeneral";
import MovieCard from "@/Components/MovieCard";
import Header from "@/Components/Header";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IMovieFavouriteData {
  id: number;
  title: string;
  imageUrl: string;
}

interface IMovieData {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
}

const Home = () => {
  const [movieData, setMovieData] = useState([]);

  const router = useRouter();

  const isFavouriteAvailable = localStorage.getItem('movieFavourite') || '[]';
  const favouriteParsed = JSON.parse(isFavouriteAvailable);



  const redirectToDetailPage = async (id: number) => {
    router.push(`/movie-detail/${id}`);
  };

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const res = await fetch('/api/movie-list', {method: 'GET', cache: 'no-store'})
        const postData = await res.json();
        setMovieData(postData);
      } catch(err) {

      }
    }

    fetchMovieList();
  }, []);

  const handleAddToFavourite = (movie: IMovieFavouriteData) => {
    const movieData = {
      id: movie.id,
      title: movie.title,
      imageUrl: movie.imageUrl,
      isFavourite: true,
    }

    const findFavouriteMovie = favouriteParsed.find((index: IMovieFavouriteData) => index.title.includes(movie.title));

    if (findFavouriteMovie) return;

    if (!isFavouriteAvailable || favouriteParsed.length === 0) {
      const data = [];
      data.push(movieData);
      localStorage.setItem('movieFavourite', JSON.stringify(data));
      return;
    };

    favouriteParsed.push(movieData);
    localStorage.setItem('movieFavourite', JSON.stringify(favouriteParsed));
  }

  return (
    <>
      <Header/>
      <PageContainer>
        <h1 style={{paddingBottom: '30px'}}>Movie List</h1>
        <Row gutter={[16, 16]}>
          {movieData.length > 0 && movieData.map((movie: IMovieData) => (
            <Col
              key={`index-img-${movie.id}`}
              xs={12} sm={12} md={8} lg={6} xl={6}
            >
              <MovieCard
                onClick={() => redirectToDetailPage(movie.id)}
                addToFavourite={() => handleAddToFavourite(movie)}
                id={movie.id}
                name={movie.title}
                image={movie.imageUrl}
              />
            </Col>
          ))}
        </Row>
        {/* <MovieCard/> */}
      </PageContainer>
    </>
  );
}

export default Home;
