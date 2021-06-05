import styled from "styled-components";

import { ListCard } from "./ListCard";

const ListStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 22px;
`;

export const List = ({ listFiltered }) => {
  return (
    <ListStyled>
      {listFiltered.map((estate) => (
        <ListCard key={estate.id} estate={estate} />
      ))}
    </ListStyled>
  );
};
