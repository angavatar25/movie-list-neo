'use client'
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

import { Circle, FlexCenter, FlexColumn, ImageContainer, PageContainer } from "@/styling/StyledComponents/StyledGeneral";
import { BackToListButton, CastContainer, CastTitle, DetailContainer, MovieDetailContainer, StarContainer } from "@/styling/StyledPages/StyledDetailPage";

import Header from "@/Components/Header";
import { useEffect, useState } from "react";

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
  const router = useRouter();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const res = await fetch(`/api/movie-detail?id=${params.id}`, {method: 'GET', cache: 'no-store'})
        const postData = await res.json();
        if (postData) {
          setMovieDetail(postData);
        }
      } catch(err) {

      }
    }

    fetchMovieDetail();
  }, [])

  const redirectToListPage = () => {
    router.push('/');
  }

  if (!movieDetail) return <p>Loading...</p>
  return (
    <>
      <Header/>
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
            src={movieDetail.imageUrl}
            width={250}
            radius={10}
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