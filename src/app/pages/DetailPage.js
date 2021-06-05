import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

import { getDetails } from "../../redux/app/app";

import { Button } from "../components/buttons/Button";
import { Loader } from "../components/loader/Loader";
import { Details } from "../components/details/Details";

const DetailsPageStyled = styled.div`
  .buttons {
    display: flex;
    align-items: center;
    height: 121px;
  }
`;

const DetailsPage = ({ selected, getDetails }) => {
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => getDetails(id), [id, getDetails]);

  if (!selected) return <Loader />;

  return (
    <DetailsPageStyled>
      <div className="buttons">
        <Button title="Back" backArrow handler={history.goBack} />
      </div>

      <Details estate={selected} />
    </DetailsPageStyled>
  );
};

const mstp = (state) => ({
  selected: state.app.selected,
});

export const DetailsPageCont = connect(mstp, { getDetails })(DetailsPage);
