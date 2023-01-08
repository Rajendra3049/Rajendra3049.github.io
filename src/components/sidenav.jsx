import React, { useEffect, useState, ReactNode } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  AddIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import style from "../styles/navbar.module.css";
const Links = ["Home", "About", "Skills", "Projects", "Contact"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}>
    {children}
  </Link>
);

export default function Nav() {
  // dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  // responsive
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   on scroll color chnage
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <Box
        className={navbar ? style.outer_box_active : style.outer_box}
        px={4}
        backgroundColor={
          isOpen ? (colorMode === "light" ? "white" : "black") : "transparent"
        }>
        <Flex
          h={16}
          alignItems={"center"}
          style={{
            background: navbar
              ? colorMode == "light"
                ? "white"
                : "black"
              : "transparent",
          }}
          justifyContent={"space-between"}>
          <IconButton
            marginLeft={"35px"}
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack
            spacing={8}
            alignItems={"center"}
            className={style.content_box}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button
              onClick={toggleColorMode}
              className={style.ColorMode}
              style={{
                background: "transparent",
                marginTop: "5px",
                fontSize: "25px",
                marginRight: "35px",
              }}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            display={{ md: "none" }}
            paddingLeft={"30px"}
            backgroundColor={colorMode === "light" ? "white" : "black"}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
