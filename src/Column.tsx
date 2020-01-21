import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  isLoading?: boolean;
}

const Column: FunctionComponent<Props> = props => {
  return (
    <Main
      style={{ opacity: props.isLoading ? 0.5 : 1 }}
      children={props.children}
    />
  );
};

export default Column;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 5px;
`;
