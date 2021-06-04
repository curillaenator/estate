import styled from "styled-components";

import { palette } from "../../../pallete";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 36px 0 43px;

  .header_title {
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
      <div className="header_title">{title}</div>
    </HeaderStyled>
  );
};
