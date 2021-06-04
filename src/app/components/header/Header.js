import styled from "styled-components";

import { palette } from "../../../utils/pallete";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 36px 0 43px;

  .header__title {
    font-weight: 700;
    font-size: 36px;
    line-height: 49px;
    text-align: center;
    color: ${palette.fontTitle};
  }
`;

export const Header = ({ title }) => {
  return (
    <HeaderStyled>
      <h1 className="header__title">{title}</h1>
    </HeaderStyled>
  );
};
