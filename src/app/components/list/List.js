import { Link } from "react-router-dom";
import styled from "styled-components";

import est from "../../../assets/images/estate.jpg";
import { palette } from "../../../pallete";

const CardStyled = styled(Link)`
  width: 100%;
  margin-bottom: 38px;
  text-decoration: none;
  border: 1px solid ${palette.border};
  background-color: ${palette.bgCard};
  color: ${palette.fontBlack};

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

  @media (min-width: 768px) {
    width: calc(100% / 2 - 22px / 2);
  }

  @media (min-width: 1024px) {
    width: calc(100% / 3 - 44px / 3);
  }
`;

const ListStyled = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const ListCard = ({ estate }) => {
  const labelBGs = {
    IndependentLiving: "#006F79",
    SupportAvailable: "#EC6608",
  };

  const labelTxts = {
    IndependentLiving: "Independent living",
    SupportAvailable: "Restaurant & Support available",
  };

  return (
    <CardStyled to={`/details/${estate.id}`} labelbg={labelBGs[estate.type]}>
      <div className="card__image">
        <img className="card__image_img" src={est} alt="" />
        <div className="card__image_label">{labelTxts[estate.type]}</div>
      </div>

      <div className="card__info">
        <div className="card__info_title">{estate.title}</div>
        <div className="card__info_address">{estate.address}</div>
        <div className="card__info_price">
          <span>New Properties for Sale from </span>
          <span style={{ fontWeight: "700" }}>
            {estate.price.toLocaleString("en-GB", {
              style: "currency",
              currency: "GBP",
              maximumSignificantDigits: 6,
            })}
          </span>
        </div>
        <div className="card__info_options">Shared Ownership Available</div>
      </div>
    </CardStyled>
  );
};

export const List = ({ estateList }) => {
  return (
    <ListStyled>
      {estateList.map((estate) => (
        <ListCard key={estate.id} estate={estate} />
      ))}
    </ListStyled>
  );
};
