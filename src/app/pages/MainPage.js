import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getEstateList, filterEstateList } from "../../redux/app/app";

import { Loader } from "../components/loader/Loader";
import { Header } from "../components/header/Header";
import { Search } from "../components/search/Search";
import { List } from "../components/list/List";
import { Button } from "../components/buttons/Button";

const MainPageStyled = styled.div`
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 77px;
  }
`;

const MainPage = ({ listFiltered, getEstateList, filterEstateList }) => {
  useEffect(() => getEstateList(), [getEstateList]);

  if (!listFiltered) return <Loader />;

  return (
    <MainPageStyled>
      <Header title="Our Latest Developments" />
      <Search filterEstateList={filterEstateList} />
      <List listFiltered={listFiltered} />

      <div className="buttons">
        <Button title="See more" />
      </div>
    </MainPageStyled>
  );
};

const mstp = (state) => ({
  listFiltered: state.app.listFiltered,
});

export const MainPageCont = connect(mstp, { getEstateList, filterEstateList })(
  MainPage
);
