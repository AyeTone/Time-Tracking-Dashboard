import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: orange;
  padding-top: 3.5rem;

  border-radius: var(--borderRad);
`;

export const CardInfo = styled.div`
  width: 100%;

  background-color: var(--CardDF);
  border-radius: var(--borderRad);
  border-bottom-right-radius: 0.7rem;
  border-bottom-left-radius: 0.7rem;

  padding: 2rem;
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

export const Title = styled.h2``;

export const Dots = styled.img`
  width: 8%;

  opacity: 0.7;
  transition: 0.25s ease-in-out;

  &:hover {
    opacity: 1;
    filter: brightness(20);
  }
`;
export const Times = styled.div``;
export const CurrentTime = styled.p``;
export const PrevTime = styled.p``;