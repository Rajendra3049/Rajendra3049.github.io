import React, { useEffect, useState } from "react";
import Skills from "./skills";

import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Center,
  useColorMode,
  border,
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

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(colorMode);
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
    <Box>
      <Box
        className={navbar ? style.outer_box_active : style.outer_box}
        style={{
          background: navbar
            ? colorMode == "light"
              ? "white"
              : "black"
            : "transparent",
        }}>
        {/* {isOpen ? null : (
          <Button
            onClick={toggleColorMode}
            className={style.ColorMode}
            style={{
              background: "transparent",
              marginTop: "10px",
              fontSize: "20px",
            }}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        )} */}

        <Flex className={style.main_box}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack className={style.content_box}>
            <HStack
              as={"nav"}
              spacing={10}
              display={{ base: "none", md: "flex" }}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box display={{ md: "none" }} style={{ border: "1px solid red" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
