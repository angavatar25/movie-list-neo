'use client'
import Header from "@/Components/Header";

import { PageContainer } from "@/styling/StyledComponents/StyledGeneral";

import { Row, message } from "antd";
import { useEffect, useState } from "react";
import { NoticeType } from "antd/es/message/interface";
import MovieCardList from "@/Components/MovieCardList";

interface IMovieData {
  id: number;
  title: string;
  imageUrl: string;
  rating: number;
}

const Home = () => {
  const [movieData, setMovieData] = useState([]);

  const [messageApi, contextHolder] = message.useMessage();

  const showModal = ({ type, content }: { type: NoticeType, content: string }) => {
    messageApi.open({
      type,
      content,
    })
  }

  useEffect(() => {
    const fetchMovieList = async () => {
      try {
        const res = await fetch('/api/movie-list', {method: 'GET', cache: 'no-store'})
        const postData = await res.json();
        if (postData.length && postData.length > 0) {
          setMovieData(postData);
        }
      } catch(err) {
        if (err) {
          showModal({ type: 'error', content: 'Error while loading movie list, please try again'});
        }
      }
    }

    fetchMovieList();
  }, []);

  return (
    <>
      {contextHolder}
      <Header/>
      <PageContainer>
        <h1 style={{paddingBottom: '30px'}}>Movie List</h1>
        <Row gutter={[16, 16]}>
          <MovieCardList
            movieData={movieData}
          />
        </Row>
      </PageContainer>
    </>
  );
}

export default Home;
