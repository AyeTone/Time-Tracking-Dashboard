import React from "react";
import { Container, Wrapper, Text } from "./FooterStyles";

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Text>
          Challenge by{" "}
          <a
            className="
                    text-blue-300 transition-all relative link-text duration-500 hover:text-blue-500"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a className="text-neonGreen" href="#">
            Troy Richards
          </a>
          .
        </Text>
      </Wrapper>
    </Container>
  );
};

export default Footer;
