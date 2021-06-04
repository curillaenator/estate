import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { MainPageCont } from "./pages/MainPage";
import { DetailsPageCont } from "./pages/DetailPage";

import { palette } from "../utils/pallete";

const AppContainer = styled.div`
  min-width: 375px;
  padding: 0 24px;
  color: ${palette.fontBlack};

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1024px) {
    padding: 0 50px;
  }
`;

export const App = () => {
  return (
    <AppContainer>
      <Switch>
        <Route exact path="/" render={() => <MainPageCont />} />
        <Route path="/details/:id" render={() => <DetailsPageCont />} />
      </Switch>
    </AppContainer>
  );
};
