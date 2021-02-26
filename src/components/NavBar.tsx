import { Box } from "@chakra-ui/layout";
import { Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useMeQuery } from "../generated/graphql";

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const [{ data, fetching }] = useMeQuery({ requestPolicy: "network-only" });
  let body = null;
  if (fetching) {
  } else if (data?.me) {
    body = (
      <Flex ml="auto">
        <Box mr={2}>{data.me.username}</Box>
        <NextLink href="/login">
          <Button variant="link">Logout</Button>
        </NextLink>
      </Flex>
    );
  } else {
    body = (
      <Box ml="auto">
        <NextLink href="/login">
          <Link mr={2}>Login</Link>
        </NextLink>
        <NextLink href="/register">
          <Link>Register</Link>
        </NextLink>
      </Box>
    );
  }
  return (
    <Flex bg="violet" p={4}>
      {body}
    </Flex>
  );
};
