import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import {
  setSearch,
  getEstateList,
  filterEstateList,
  setSelected,
} from "../../redux/app/app";

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

const MainPage = ({
  list,
  listFiltered,
  selected,
  search,
  setSearch,
  getEstateList,
  filterEstateList,
  setSelected,
}) => {
  useEffect(() => {
    !list && getEstateList();
    selected && setSelected(null);
  }, [list, getEstateList]);

  if (!listFiltered) return <Loader />;

  return (
    <MainPageStyled>
      <Header title="Our Latest Developments" />

      <Search
        search={search}
        setSearch={setSearch}
        filterEstateList={filterEstateList}
      />

      <List listFiltered={listFiltered} setSelected={setSelected} />

      <div className="buttons">
        <Button title="See more" />
      </div>
    </MainPageStyled>
  );
};

const mstp = (state) => ({
  search: state.app.search,
  selected: state.app.selected,
  list: state.app.list,
  listFiltered: state.app.listFiltered,
});

export const MainPageCont = connect(mstp, {
  setSearch,
  getEstateList,
  filterEstateList,
  setSelected,
})(MainPage);
