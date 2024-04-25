'use client'

import { PageContainer } from "@/styling/StyledComponents/StyledGeneral";
import MovieCard from "@/Components/MovieCard";
import Header from "@/Components/Header";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  const redirectToDetailPage = () => {
    router.push('/movie-list');
  }
  return (
    <>
      <Header/>
      <PageContainer>
        <h1 style={{paddingBottom: '30px'}}>Movie List</h1>
        <Row>
          <Col span={6}>
            <MovieCard onClick={redirectToDetailPage}/>
          </Col>
          <Col span={6}><MovieCard/></Col>
          <Col span={6}><MovieCard/></Col>
          <Col span={6}><MovieCard/></Col>
        </Row>
        <MovieCard/>
      </PageContainer>
    </>
  );
}

export default Home;
