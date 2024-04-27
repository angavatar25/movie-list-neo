'use client'
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

import { Circle, FlexColumn, ImageContainer, PageContainer } from "@/styling/StyledComponents/StyledGeneral";
import { BackToListButton, CastContainer, CastTitle, DetailContainer, MovieDetailContainer, StarContainer } from "@/styling/StyledPages/StyledDetailPage";

import Header from "@/Components/Header";
import { useEffect, useState } from "react";
import { NoticeType } from "antd/es/message/interface";
import { message } from "antd";
import LargeImage from "@/Components/LargeImage";

interface IMovieDetail {
  id: number,
  title: string,
  year: number,
  rating: number,
  imageUrl: string,
  imageLargeUrl: string,
  starring: Array<string>,
  desc: string,
  releaseDate: string,
  duration: string,
  genre: string,
}

const ListPage = ({ params }: { params: { id: number }}) => {
  const [movieDetail, setMovieDetail] = useState<IMovieDetail | null>(null);
  const [showLargeImage, setShowLargeImage] = useState(false);

  const router = useRouter();

  const [messageApi, contextHolder] = message.useMessage();

  const showModal = ({ type, content }: { type: NoticeType, content: string }) => {
    messageApi.open({
      type,
      content,
    })
  }

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const res = await fetch(`/api/movie-detail?id=${params.id}`, {method: 'GET', cache: 'no-store'})
        const postData = await res.json();
        if (postData) {
          setMovieDetail(postData);
        }
      } catch(err) {
        if (err) {
          showModal({ type: 'error', content: 'Error while loading movie list, please try again'});
        }
      }
    }

    fetchMovieDetail();
  }, [])

  const redirectToListPage = async () => {
    try {
      const res = await fetch('/api/redirect', { method: 'POST' });

      if (res.ok) {
        console.log('redirect success');
      } else {
        console.log('redirect failed', res.statusText);
      }
    } catch (err) {
      
    }
  }

  const handleShowLargeImage = () => {
    setShowLargeImage(!showLargeImage)
  }

  if (!movieDetail) return (
    <>
      {contextHolder}
      <p>Loading...</p>
    </>
  )
  return (
    <>
      {contextHolder}
      <Header/>
      <LargeImage
        show={showLargeImage}
        imgUrl={movieDetail.imageLargeUrl}
        onClose={handleShowLargeImage}
      />
      <PageContainer>
        <BackToListButton
          gap={10}
          onClick={redirectToListPage}
        >
          <ArrowLeftOutlined />
          <p>List</p>
        </BackToListButton>
        <MovieDetailContainer gap={50}>
          <ImageContainer
            src={movieDetail.imageLargeUrl}
            width={250}
            radius={10}
            onClick={handleShowLargeImage}
          />
          <FlexColumn gap={20}>
            <h1>{movieDetail.title}</h1>
            <p>{movieDetail.desc}</p>
            <DetailContainer>
              <p>{movieDetail.releaseDate}</p>
              <Circle width={5}/>
              <p>{movieDetail.duration} Minutes</p>
              <Circle width={5}/>
              <p>{movieDetail.genre}</p>
            </DetailContainer>
          </FlexColumn>
        </MovieDetailContainer>
        <CastContainer>
          <CastTitle margin={20}>Cast</CastTitle>
          <div>
            {movieDetail.starring ? (
              movieDetail.starring.map((star: string) => (
                <StarContainer gap={15}>
                  <Circle width={20}/>
                  <p>{star}</p>
                </StarContainer>
              ))
            ) : null}
          </div>
        </CastContainer>
      </PageContainer>
    </>
  )
}

export default ListPage;