'use client'
import Header from "@/Components/Header";
import MovieCard from "@/Components/MovieCard";
import { Centered, PageContainer } from "@/styling/StyledComponents/StyledGeneral";
import { FolderOpenFilled } from "@ant-design/icons";
import { Col, Row } from "antd";

interface IFavouriteMovie {
  id: number;
  isFavourite: boolean;
  title: string;
  imageUrl: string;
}

const FavouritePage = () => {
  const isFavouriteStorageAvailable = localStorage.getItem('movieFavourite') || '[]';
  const favouriteParsed = JSON.parse(isFavouriteStorageAvailable);
  const isFavouriteMovieAvailable = favouriteParsed.length > 0;

  const handleDeleteFavourite = (movieId: number) => {
    const favouriteMovieId = favouriteParsed.findIndex((favourite: IFavouriteMovie) => favourite.id === movieId);

    favouriteParsed.splice(favouriteMovieId, 1);
    localStorage.setItem("movieFavourite", JSON.stringify(favouriteParsed));
  }

  return (
    <>
      <Header/>
      <PageContainer>
        <h1 style={{paddingBottom: '30px'}}>Favourite</h1>
        {isFavouriteMovieAvailable ? (
        <Row>
          {favouriteParsed && favouriteParsed.map((favourite: any) => (
            <Col
              key={`col-${favourite.id}`}
              xs={12} sm={12} md={8} lg={6} xl={6}
            >
              <MovieCard
                key={`index-img-${favourite.id}`}
                onClick={() => console.log('hehehe')}
                addToFavourite={() => handleDeleteFavourite(favourite.id)}
                id={favourite.id}
                name={favourite.title}
                image={favourite.imageUrl}
                isFavourite={favourite.isFavourite}
              />
            </Col>
          ))}
        </Row>) : (
          <Centered style={{ color: 'gray' }}>
            <FolderOpenFilled style={{ fontSize: '150px' }}/>
            <p>No favourite list yet</p>
          </Centered>
        )}
      </PageContainer>
    </>
  )
};

export default FavouritePage;