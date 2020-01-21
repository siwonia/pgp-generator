import React, { FunctionComponent } from "react";
import styled from "styled-components";

const Row: FunctionComponent = props => {
  return (
    <Main children={props.children} />
  );
}

export default Row;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-left: 5px;
  margin-right: 5px;
`;
