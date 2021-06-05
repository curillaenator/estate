import styled from "styled-components";

import { palette } from "../../../utils/pallete";

const DetailsStyled = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 38px;
  border: 1px solid ${palette.border};
  background-color: ${palette.bgCard};
  color: ${palette.fontBlack};

  .details__image {
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 60.21%;

    &_img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &_label {
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

  .details__info {
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
`;

export const Details = ({ estate }) => {
  const labelBGs = {
    IndependentLiving: "#006F79",
    SupportAvailable: "#EC6608",
  };

  const labelTxts = {
    IndependentLiving: "Independent living",
    SupportAvailable: "Restaurant & Support available",
  };

  return (
    <DetailsStyled labelbg={labelBGs[estate.type]}>
      <div className="details__image">
        <img
          className="details__image_img"
          src={`https://via.placeholder.com/600x300/363636/FFFFFF?text=${estate.title}`}
          alt={estate.title}
          draggable={false}
        />
        <div className="details__image_label">{labelTxts[estate.type]}</div>
      </div>

      <div className="details__info">
        <h2 className="details__info_title">{estate.title}</h2>

        <p className="details__info_address">{estate.address}</p>

        <p className="details__info_price">
          <span>New Properties for Sale from </span>
          <span style={{ fontWeight: "700" }}>
            {estate.price.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
              maximumSignificantDigits: 6,
            })}
          </span>
        </p>

        <p className="details__info_options">Shared Ownership Available</p>
      </div>
    </DetailsStyled>
  );
};
