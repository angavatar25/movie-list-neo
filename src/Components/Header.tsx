'use client'

import { ContentContainer, HamburgerContainer, HeaderContainer, MenuContainer, MenuContainerMobile } from "@/styling/StyledComponents/StyledHeader"
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Header = () => {
  const router = useRouter();

  const [expandMenu, setExpandMenu] = useState(false);

  const redirectToList = () => {
    router.push('/');
    setExpandMenu(false);
  }
  const redirectToFavourite = () => {
    router.push('/favourite')
    setExpandMenu(false);
  }
  return (
    <HeaderContainer>
      <ContentContainer>
        <MenuContainer>
          <p onClick={redirectToList}>List</p>
          <p onClick={redirectToFavourite}>Favourite</p>
        </MenuContainer>
        <HamburgerContainer onClick={() => setExpandMenu(!expandMenu)}>
          {expandMenu ?
            <CloseOutlined style={{ fontSize: '20px' }} /> :
            <MenuOutlined style={{ fontSize: '20px' }} />
          }
        </HamburgerContainer>
        <Flex gap={10}>
          <Button type="primary">ID</Button>
          <Button ghost>EN</Button>
        </Flex>
      </ContentContainer>
      {expandMenu ? (
        <MenuContainerMobile>
          <p onClick={redirectToList}>List</p>
          <p onClick={redirectToFavourite}>Favourite</p>
        </MenuContainerMobile>
      ) : null}
    </HeaderContainer>
  )
}

export default Header;