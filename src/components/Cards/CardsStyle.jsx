import styled from "styled-components";
import { tablet } from "../../responsive";

export const Container = styled.div`
  width: 100%;

  display: grid;
  gap: 1rem;

  ${tablet({
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  })}
`;
