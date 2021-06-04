import { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { getEstateList } from "../../redux/app/app";

import { Loader } from "../components/loader/Loader";
import { Header } from "../components/header/Header";
import { Search } from "../components/search/Search";
import { List } from "../components/list/List";

const MainPageStyled = styled.div``;

const MainPage = ({ estateList, getEstateList }) => {
  useEffect(() => getEstateList(), [getEstateList]);

  if (!estateList) return <Loader />;

  return (
    <MainPageStyled>
      <Header title="Our Latest Developments" />
      <Search />
      <List estateList={estateList} />
    </MainPageStyled>
  );
};

const mstp = (state) => ({
  estateList: state.app.estateList,
});

export const MainPageCont = connect(mstp, { getEstateList })(MainPage);
