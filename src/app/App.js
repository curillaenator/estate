import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import { MainPageCont } from "./pages/main";
import { DetailsPageCont } from "./pages/details";

import { palette } from "../pallete";

const AppContainer = styled.div`
  padding: 0 50px;
  color: ${palette.fontBlack};
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
