import { connect } from "react-redux";
import styled from "styled-components";

const DetailsPageStyled = styled.div``;

const DetailsPage = () => {
  return <DetailsPageStyled></DetailsPageStyled>;
};

const mstp = (state) => ({});

export const DetailsPageCont = connect(mstp, {})(DetailsPage);
