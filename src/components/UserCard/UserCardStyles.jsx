import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.div`
  background-color: var(--CardDF);
  border-radius: var(--borderRad);

  width: 100%;

  ${tablet({
    width: "30%",
  })}
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  padding: 3rem 0;

  background-color: var(--UserCard);
  border-radius: var(--borderRad);

  ${tablet({
    padding: "1.5rem 1.2rem",

    flexDirection: "column",
    alignItems: "unset",
    gap: "1.3rem",
  })}
`;

export const UserImage = styled.img`
  width: 20%;
  border: 2px solid white;
  border-radius: 50%;
  margin-left: 3rem;

  ${tablet({
    width: "40%",
    marginLeft: "unset",
  })}
`;

export const UserInfo = styled.div`
  display: grid;
  gap: 0.8rem;

  ${tablet({
    gap: "3px",
  })}
`;

export const Report = styled.p`
  font-weight: 100;
  font-size: 1.3rem;
  opacity: 0.7;

  ${tablet({
    fontSize: "11px",
  })}
`;

export const UserName = styled.h1`
  font-weight: 100;
  font-size: 2.6rem;

  ${tablet({
    fontSize: "1.5rem",
    marginBottom: "1.8rem",
  })}
`;

export const TimeFrames = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 3rem;

  padding: 2rem;

  ${tablet({
    padding: "1rem 1.2rem 1.2rem",

    flexDirection: "column",
    gap: "1rem",
  })}
`;

export const Time = styled.p`
  font-size: 1.8rem;
  font-weight: lighter;
  opacity: 0.7;

  transition: 0.25s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  ${tablet({
    fontSize: "12px",
  })}
`;
