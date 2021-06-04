import styled from "styled-components";

import { palette } from "../../../utils/pallete";

import arrow from "../../../assets/icons/arrow.svg";

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 50px;
  border: 1px solid ${palette.border};
  border-radius: 25px;
  background-color: ${palette.bgWhite};
  outline: none;
  cursor: pointer;
  transition: 0.08s linear;

  .button__title {
    display: flex;
    align-items: center;

    &_back {
      transform: rotate(180deg);
    }

    & > p {
      margin: 0 8px;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.3px;
    }
  }

  &:hover {
    box-shadow: 0px 2px 6px 0px ${palette.shadow};
    transform: scale(1.03);
  }

  &:active {
    box-shadow: none;
    transform: scale(1);
  }
`;

export const Button = ({
  title,
  backArrow = false,
  handler = () => console.log("Button"),
}) => {
  return (
    <ButtonStyled onClick={handler}>
      <div className="button__title">
        {backArrow && (
          <img className="button__title_back" src={arrow} alt="Arrow" />
        )}
        <p>{title}</p>
        {!backArrow && <img src={arrow} alt="Arrow" />}
      </div>
    </ButtonStyled>
  );
};
