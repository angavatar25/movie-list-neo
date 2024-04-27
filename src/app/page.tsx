'use client'

import MovieCard from "@/Components/MovieCard";
import Header from "@/Components/Header";

import { PageContainer } from "@/styling/StyledComponents/StyledGeneral";

import { Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { NoticeType } from "antd/es/message/interface";

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

  const [messageApi, contextHolder] = message.useMessage();

  const router = useRouter();

  const isFavouriteAvailable = localStorage.getItem('movieFavourite') || '[]';
  const favouriteParsed = JSON.parse(isFavouriteAvailable);

  const showModal = ({ type, content }: { type: NoticeType, content: string }) => {
    messageApi.open({
      type,
      content,
    })
  }

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
        if (err) {
          showModal({ type: 'error', content: 'Error while loading movie list, please try again'});
        }
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

    if (findFavouriteMovie) {
      showModal({ type: 'error', content: 'Movie already exist' });
      return;
    };

    if (!isFavouriteAvailable || favouriteParsed.length === 0) {
      const data = [];
      data.push(movieData);
      localStorage.setItem('movieFavourite', JSON.stringify(data));
      showModal({ type: 'success', content: 'Added to favourite' });
      return;
    };

    favouriteParsed.push(movieData);
    localStorage.setItem('movieFavourite', JSON.stringify(favouriteParsed));
    showModal({ type: 'success', content: 'Added to favourite' });
  }

  return (
    <>
      {contextHolder}
      <Header/>
      <PageContainer>
        <h1 style={{paddingBottom: '30px'}}>Movie List</h1>
        <Row gutter={[16, 16]}>
          {movieData.length > 0 && movieData.map((movie: IMovieData) => (
            <Col
              key={`col-${movie.id}`}
              xs={12} sm={12} md={8} lg={6} xl={6}
            >
              <MovieCard
                key={`index-img-${movie.id}`}
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
