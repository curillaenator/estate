import { Form, Field } from "react-final-form";
import styled from "styled-components";

import { palette } from "../../../pallete";

const FormStyled = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 45px;

  .search_title {
    margin-right: 16px;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.3px;
  }

  .search_input {
    width: 40%;
    min-width: 418px;
    height: 50px;
    padding: 0 25px;
    border: 1px solid ${palette.border};
    border-radius: 25px;
    transition: 0.12s linear;
    outline: none;

    &:focus {
      border: 1px solid ${palette.labelOrange};
    }
  }
`;

export const Search = () => {
  const onSubmit = (seacrhData) => console.log(seacrhData);

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit, form, values }) => {
        // console.log(values);
        return (
          <FormStyled onSubmit={handleSubmit}>
            <div className="search_title">Filter</div>
            <Field name="search" component="input" className="search_input" />
          </FormStyled>
        );
      }}
    />
  );
};
