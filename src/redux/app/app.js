import * as axios from "axios";

const base = axios.create({
  baseURL: "https://603e38c548171b0017b2ecf7.mockapi.io/homes",
});

const SET_ESTATE_LIST = "app/SET_ESTATE_LIST";

const initialState = {
  estateList: null,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_ESTATE_LIST:
      return { ...state, estateList: action.payload };

    default:
      return state;
  }
};

// ACTIONS

const setEstateList = (payload) => ({ type: SET_ESTATE_LIST, payload });

// THUNKS

export const getEstateList = () => async (dispatch) => {
  const estates = await base.get().then((res) => res.data);
  dispatch(setEstateList(estates));
};
