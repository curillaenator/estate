import { Link } from "react-router-dom";
import styled from "styled-components";

import { palette } from "../../../utils/pallete";

const CardStyled = styled(Link)`
  position: relative;
  width: 100%;
  margin-bottom: 38px;
  text-decoration: none;
  border: 1px solid ${palette.border};
  background-color: ${palette.bgCard};
  color: ${palette.fontBlack};
  transition: 0.12s ease-in-out;

  .card__image {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 60.21%;

    .card__image_img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card__image_label {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 0;
      right: 0;
      width: fit-content;
      height: 30px;
      padding: 0 10px;
      background-color: ${({ labelbg }) => labelbg};

      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      color: ${palette.fontWhite};
    }
  }

  .card__info {
    padding: 20px;

    &_title {
      margin-bottom: 2px;
      font-weight: 700;
      font-size: 20px;
      line-height: 27px;
    }

    &_address {
      margin-bottom: 15px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }

    &_price {
      margin-bottom: 7px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
    }

    &_options {
      font-weight: normal;
      font-size: 14px;
      line-height: 19px;
    }
  }

  &:hover {
    box-shadow: 0px 2px 16px 0px ${palette.shadow};
    transform: scale(1.01);
  }

  &:active {
    box-shadow: none;
    transform: scale(1);
    opacity: 0.85;
  }

  @media (min-width: 768px) {
    width: calc(100% / 2 - 22px / 2);
    margin-right: 22px;

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (min-width: 1024px) {
    width: calc(100% / 3 - 44px / 3);

    &:nth-child(2n) {
      margin-right: 22px;
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
`;

export const ListCard = ({ estate, setSelected }) => {
  const labelBGs = {
    IndependentLiving: "#006F79",
    SupportAvailable: "#EC6608",
  };

  const labelTxts = {
    IndependentLiving: "Independent living",
    SupportAvailable: "Restaurant & Support available",
  };

  return (
    <CardStyled
      to={`/details/${estate.id}`}
      labelbg={labelBGs[estate.type]}
      onClick={() => setSelected(estate)}
    >
      <div className="card__image">
        <img
          className="card__image_img"
          src={`https://via.placeholder.com/600x300/363636/FFFFFF?text=${estate.title}`}
          alt={estate.title}
          draggable={false}
        />
        <div className="card__image_label">{labelTxts[estate.type]}</div>
      </div>

      <div className="card__info">
        <h2 className="card__info_title">{estate.title}</h2>
        <p className="card__info_address">{estate.address}</p>
        <p className="card__info_price">
          <span>New Properties for Sale from </span>
          <span style={{ fontWeight: "700" }}>
            {estate.price.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
              maximumSignificantDigits: 6,
            })}
          </span>
        </p>
        <p className="card__info_options">Shared Ownership Available</p>
      </div>
    </CardStyled>
  );
};
