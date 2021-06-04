import styled from "styled-components";

import { icons } from "../../../utils/icons";
import { palette } from "../../../utils/pallete";

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

    & > p {
      margin-right: 8px;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.3px;
    }

    & > svg {
    }
  }

  &:hover {
    box-shadow: 0px 2px 6px 0px ${palette.shadow};
    transform: scale(1.04);
  }

  &:active {
    box-shadow: none;
    transform: scale(1);
  }
`;

export const Button = ({ title, handler = () => console.log("See more") }) => {
  return (
    <ButtonStyled onClick={handler}>
      <div className="button__title">
        <p>{title}</p>
        {icons.chevron}
      </div>
    </ButtonStyled>
  );
};
