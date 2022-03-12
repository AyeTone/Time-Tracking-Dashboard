import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  z-index: 1;

  width: 100%;
  background-color: ${(props) => props.bg};
  padding-top: 3.5rem;

  border-radius: var(--borderRad);
`;

export const BgImage = styled.img`
  z-index: -1;
  position: absolute;
  top: -15px;
  right: 10px;

  width: 100px;
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
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
`;

export const Dots = styled.img`
  width: 8%;

  opacity: 0.8;
  transition: 0.25s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;

export const Times = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 1rem;
`;

export const CurrentTime = styled.p`
  font-size: 1.9rem;
  font-weight: lighter;
`;

export const PrevTime = styled.p`
  color: var(--CardHover);
`;
