'use client'

import { ContentContainer, HeaderContainer, MenuContainer } from "@/styling/StyledComponents/StyledHeader"
import { Button, Flex } from "antd";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const redirectToList = () => {
    router.push('/');
  }
  const redirectToFavourite = () => {
    router.push('/favourite')
  }
  return (
    <HeaderContainer>
      <ContentContainer>
        <MenuContainer>
          <p onClick={redirectToList}>List</p>
          <p onClick={redirectToFavourite}>Favourite</p>
        </MenuContainer>
        <Flex gap={10}>
          <Button type="primary">ID</Button>
          <Button ghost>EN</Button>
        </Flex>
      </ContentContainer>
    </HeaderContainer>
  )
}

export default Header;