import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import style from "../styles/navbar.module.css";
import { Link } from "react-scroll";
const Links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  // dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  // responsive
  const { isOpen, onOpen, onClose } = useDisclosure();

  //   on scroll color change
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
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
              ? colorMode === "light"
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
            spacing={18}
            alignItems={"center"}
            className={style.content_box}>
            <HStack
              as={"nav"}
              spacing={8}
              display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  key={link}>
                  <div className={style.link}> {link}</div>
                </Link>
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
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-50}
                  key={link}>
                  {link}
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
