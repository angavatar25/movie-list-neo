import { CloseCircleContainer, LargeImageContainer, LargeImageStyling } from "@/styling/StyledComponents/StyledLargeImage";
import { CloseCircleOutlined } from "@ant-design/icons";

interface ILargeImage {
  show: boolean;
  imgUrl: string;
  onClose(): void;
}

const LargeImage = (props: ILargeImage) => {
  return (
    <>
      {props.show ? (
        <LargeImageContainer>
          <LargeImageStyling
            src={props.imgUrl}
            alt={props.imgUrl}
          />
          <CloseCircleContainer onClick={props.onClose}>
            <CloseCircleOutlined/>
          </CloseCircleContainer>
        </LargeImageContainer>
      ) : null}
    </>
  )
}

export default LargeImage;