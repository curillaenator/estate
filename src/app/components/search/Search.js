import { useState, useEffect } from "react";
import styled from "styled-components";

import { palette } from "../../../utils/pallete";

const SearchStyled = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 45px;

  .search_title {
    margin-right: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
  }

  .search__input {
    width: 100%;
    height: 50px;
    padding: 0 25px;
    border: 1px solid ${palette.border};
    border-radius: 25px;
    transition: 0.12s linear;
    outline: none;
    font-weight: 700;
    font-size: 16px;
    color: ${palette.fontBlack};
    letter-spacing: -0.3px;

    &::placeholder {
      font-weight: 600;
      font-size: 16px;
      letter-spacing: -0.3px;
      color: ${palette.border};
      transition: 0.08s linear;
    }

    &:focus::placeholder {
      opacity: 0;
    }

    &:focus {
      border: 1px solid ${palette.orange};
    }
  }

  @media (min-width: 768px) {
    .search__input {
      width: 418px;
    }
  }
`;

export const Search = ({ filterEstateList }) => {
  const [search, setSeach] = useState("");
  const handleInput = (e) => setSeach(e.target.value);

  useEffect(() => filterEstateList(search), [search, filterEstateList]);

  return (
    <SearchStyled>
      <div className="search_title">Filter</div>
      <input
        className="search__input"
        type="text"
        value={search}
        onChange={handleInput}
        placeholder="...type at least 3 symbols"
      />
    </SearchStyled>
  );
};
