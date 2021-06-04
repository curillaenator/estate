import styled from "styled-components";

import loader from "../../../assets/icons/loader.svg";

import { palette } from "../../../utils/pallete";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  .loading_svg {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }

  .loading_text {
    color: ${palette.fontDisabled};
  }
`;

export const Loader = () => {
  return (
    <LoaderStyled>
      <img className="loading_svg" src={loader} alt="Loading" />
      <div className="loading_text">Loading</div>
    </LoaderStyled>
  );
};
