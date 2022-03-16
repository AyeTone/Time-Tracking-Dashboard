import { keyframes } from "styled-components";
import styled from "styled-components";
import { tablet } from "../../../responsive";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 3;

  width: 100%;
  background-color: ${(props) => props.bg};
  padding-top: 3.5rem;

  border-radius: var(--borderRad);

  ${tablet({
    paddingTop: "2rem",
  })}
`;

export const BgImage = styled.img`
  z-index: -1;
  position: absolute;
  top: -15px;
  right: 10px;

  width: 100px;

  ${tablet({
    width: "50px",

    top: "-4px",
  })}
`;

export const CardInfo = styled.div`
  width: 100%;

  background-color: var(--CardDF);
  border-radius: var(--borderRad);

  padding: 1.8rem;
  cursor: pointer;

  transition: 0.25s;

  &:active {
    background-color: var(--Font);
  }

  ${tablet({
    padding: "1.2rem 1rem",
  })}
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.6rem;

  ${tablet({
    fontSize: "13px",
  })}
`;

export const Dots = styled.img`
  width: 8%;

  opacity: 0.8;
  transition: 0.25s ease-in-out;

  &:hover {
    opacity: 1;
  }

  ${tablet({
    width: "12px",
  })}
`;

export const Times = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;

  ${tablet({
    flexDirection: "column",
    alignItems: "unset",
    gap: "5px",

    marginLeft: "2px",
  })}
`;

export const CurrentTime = styled.p`
  font-size: 1.9rem;
  font-weight: lighter;

  ${tablet({})}
`;

export const PrevTime = styled.p`
  color: var(--CardHover);

  ${tablet({
    fontSize: "11px",
  })}
`;
