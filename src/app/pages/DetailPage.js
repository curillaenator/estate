import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../components/buttons/Button";

const DetailsPageStyled = styled.div`
  .buttons {
    display: flex;
    align-items: center;
    height: 121px;
  }
`;

const DetailsPage = () => {
  const history = useHistory();

  return (
    <DetailsPageStyled>
      <div className="buttons">
        <Button title="Back" backArrow handler={history.goBack} />
      </div>
    </DetailsPageStyled>
  );
};

const mstp = (state) => ({});

export const DetailsPageCont = connect(mstp, {})(DetailsPage);
