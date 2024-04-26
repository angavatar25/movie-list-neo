'use client'
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";

import { Circle, FlexCenter, FlexColumn, ImageContainer, PageContainer } from "@/styling/StyledComponents/StyledGeneral";
import { BackToListButton, CastContainer, CastTitle, DetailContainer, MovieDetailContainer } from "@/styling/StyledPages/StyledDetailPage";

import Header from "@/Components/Header";

const ListPage = ({ params }: { params: { id: number }}) => {
  const router = useRouter();

  if (params.id) {
    console.log(params.id)
  }

  const redirectToListPage = () => {
    router.push('/');
  }
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
            src="https://images.pexels.com/photos/9697600/pexels-photo-9697600.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            imageWidth={250}
            cornerRadius={10}
          />
          <FlexColumn gap={20}>
            <h1>Movie Title</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque cupiditate quas at minus magnam perspiciatis corrupti eligendi delectus voluptas, in molestiae eius vel magni nemo accusantium culpa blanditiis praesentium quam!</p>
            <DetailContainer>
              <p>12-11-2010</p>
              <Circle width={5}/>
              <p>90 Minutes</p>
              <Circle width={5}/>
              <p>Horror</p>
            </DetailContainer>
          </FlexColumn>
        </MovieDetailContainer>
        <CastContainer>
          <CastTitle margin={20}>Cast</CastTitle>
          <div>
            <FlexCenter gap={10}>
              <Circle width={20}/>
              <p>Cast name</p>
            </FlexCenter>
          </div>
        </CastContainer>
      </PageContainer>
    </>
  )
}

export default ListPage;