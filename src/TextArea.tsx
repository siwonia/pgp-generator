import React, { FunctionComponent } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  valueRef?: React.MutableRefObject<string>;
  value?: string;
}

const TextArea: FunctionComponent<Props> = props => {
  return (
    <Main>
      <Header>{props.title}</Header>
      <Box
        value={props.value}
        onChange={event => {
          if (props.valueRef) {
            props.valueRef.current = event.target.value;
          }
        }}
      />
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
  background-color: #09111f;
  text-align: center;
  color: #fff;
  padding: 10px;
  font-size: 14px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const Box = styled.textarea`
  display: flex;
  flex: 1;
  background-color: #151c29;
  color: #fff;
  padding: 10px;
  border: none;
  overflow: auto;
  outline: none;
  box-shadow: none;
  resize: none;
  font-size: 12px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
