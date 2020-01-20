import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const TextArea: FunctionComponent<Props> = props => {
  return (
    <Main>
      <Header>{props.title}</Header>
      <Box />
    </Main>
  );
};

export default TextArea;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Header = styled.div`
  background-color: #000;
  text-align: center;
  color: #fff;
  padding: 10px;
`;

const Box = styled.textarea`
  display: flex;
  flex: 1;
  background-color: #383d47;
  color: #fff;
  padding: 10px;
  border: none;
  overflow: auto;
  outline: none;
  box-shadow: none;
  resize: none;
  font-size: 13px;
`;
