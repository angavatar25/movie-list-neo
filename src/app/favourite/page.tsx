'use client'
import Header from "@/Components/Header";
import MovieCard from "@/Components/MovieCard";
import { Centered, PageContainer } from "@/styling/StyledComponents/StyledGeneral";
import { FolderOpenFilled } from "@ant-design/icons";
import { Col, Row, message } from "antd";
import { NoticeType } from "antd/es/message/interface";
import { useEffect, useState } from "react";

interface IFavouriteMovie {
  id: number;
  isFavourite: boolean;
  title: string;
  imageUrl: string;
}

const FavouritePage = () => {
  const [favourite, setFavourite] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();

  const isFavouriteStorageAvailable = localStorage.getItem('movieFavourite') || '[]';
  const favouriteParsed = JSON.parse(isFavouriteStorageAvailable);
  const isFavouriteMovieAvailable = favouriteParsed.length > 0;

  useEffect(() => {
    setFavourite(favouriteParsed);
  }, [])

  const showSuccessDeletedModal = ({ type, content }: { type: NoticeType, content: string }) => {
    messageApi.open({
      type,
      content,
    })
  }

  const handleDeleteFavourite = (id: number) => {
    const isMovieExist = favouriteParsed.find((favourite: IFavouriteMovie) => favourite.id === id);

    if (isMovieExist) {
      const updatedFavourite = favourite.filter((movie: IFavouriteMovie) => movie.id !== id)
      localStorage.setItem("movieFavourite", JSON.stringify(updatedFavourite));

      setFavourite(updatedFavourite);
      showSuccessDeletedModal({ type: 'success', content: 'Movie deleted'});
    }
  }

  return (
    <>
      {contextHolder}
      <Header/>
      <PageContainer>
        <h1 style={{paddingBottom: '30px'}}>Favourite</h1>
        {isFavouriteMovieAvailable ? (
        <Row>
          {favourite.map((favourite: IFavouriteMovie) => (
            <Col
              key={`col-${favourite.id}`}
              xs={12} sm={12} md={8} lg={6} xl={6}
            >
              <MovieCard
                key={`index-img-${favourite.id}`}
                onClick={() => console.log('hehehe')}
                removeFavourite={() => handleDeleteFavourite(favourite.id)}
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