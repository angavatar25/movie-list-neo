'use client'

import { PageContainer } from "@/styling/StyledComponents/StyledGeneral";
import MovieCard from "@/Components/MovieCard";
import Header from "@/Components/Header";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";

const data = [
  {
    "id": 1,
    "title": "Movie 1",
    "year": 2010,
    "rating": 3,
    "imageUrl": "https://images.pexels.com/photos/9697600/pexels-photo-9697600.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200"
  },
  {
    "id": 2,
    "title": "Movie 2",
    "year": 2007,
    "rating": 5,
    "imageUrl": "https://images.pexels.com/photos/8175462/pexels-photo-8175462.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200"
  },
  {
    "id": 3,
    "title": "Movie 3",
    "year": 2020,
    "rating": 1,
    "imageUrl": "https://images.pexels.com/photos/9697600/pexels-photo-9697600.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200"
  },
  {
    "id": 4,
    "title": "Movie 4",
    "year": 2012,
    "rating": 4,
    "imageUrl": "https://images.pexels.com/photos/9731891/pexels-photo-9731891.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200"
  },
  {
    "id": 5,
    "title": "Movie 5",
    "year": 2007,
    "rating": 5,
    "imageUrl": "https://images.pexels.com/photos/3029520/pexels-photo-3029520.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200"
  },
];

interface IMovieFavouriteData {
  id: number;
  title: string;
  imageUrl: string;
}

const Home = () => {
  const router = useRouter();
  const isFavouriteAvailable = localStorage.getItem('movieFavourite') || '[]';
  const favouriteParsed = JSON.parse(isFavouriteAvailable);


  const redirectToDetailPage = (id: number) => {
    router.push(`/movie-detail/${id}`);
  };

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
        <Row>
          {data.map((movie) => (
            <Col span={6}>
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
          {/* <Col span={6}><MovieCard/></Col>
          <Col span={6}><MovieCard/></Col>
          <Col span={6}><MovieCard/></Col> */}
        </Row>
        {/* <MovieCard/> */}
      </PageContainer>
    </>
  );
}

export default Home;
