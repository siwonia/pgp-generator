import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Column: FunctionComponent = props => {
  return <Main children={props.children} />;
};

export default Column;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px;
  :first-child {
    margin-left: 10px;
  }
  :last-child {
    margin-right: 10px;
  }
`;
