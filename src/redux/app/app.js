import * as axios from "axios";

const base = axios.create({
  baseURL: "https://603e38c548171b0017b2ecf7.mockapi.io/homes",
});

const SET_LIST = "app/SET_LIST";
const SET_LIST_FILTERED = "app/SET_LIST_FILTERED";

const initialState = {
  list: null,
  listFiltered: null,
};

export const app = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIST:
      return { ...state, list: action.payload };

    case SET_LIST_FILTERED:
      return { ...state, listFiltered: action.payload };

    default:
      return state;
  }
};

// ACTIONS

const setList = (payload) => ({ type: SET_LIST, payload });
const setListFiltered = (payload) => ({ type: SET_LIST_FILTERED, payload });

// THUNKS

export const getEstateList = () => async (dispatch) => {
  const estates = await base.get().then((res) => res.data);
  dispatch(setList(estates));
  dispatch(setListFiltered(estates));
};

export const filterEstateList = (filt) => (dispatch, getState) => {
  const estates = getState().app.list;

  if (filt.length >= 3) {
    const filtered = estates.filter((est) =>
      est.title.toLowerCase().includes(filt.toLowerCase())
    );
    return dispatch(setListFiltered(filtered));
  }

  if (filt.length < 3) {
    return dispatch(setListFiltered(estates));
  }
};
