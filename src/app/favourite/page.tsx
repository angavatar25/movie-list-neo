import Header from "@/Components/Header";
import MovieCard from "@/Components/MovieCard";
import { Centered, PageContainer } from "@/styling/StyledComponents/StyledGeneral";
import { FolderOpenFilled } from "@ant-design/icons";
import { Col, Row } from "antd";

const FavouritePage = () => {
  const isFavouriteAvailable = true;
  return (
    <>
      <Header/>
      <PageContainer>
        <h1 style={{paddingBottom: '30px'}}>Favourite</h1>
        {isFavouriteAvailable ? (<Row>
          <Col span={6}><MovieCard/></Col>
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