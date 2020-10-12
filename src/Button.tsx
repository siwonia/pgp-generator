import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  title: string;
  onClick: () => void;
}

const Button: FC<Props> = props => {
  return <Main onClick={props.onClick}>{props.title}</Main>;
};

export default Button;

const Main = styled.button`
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: #2b5ec5;
  color: #fff;
  border: 0 none;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  box-shadow: none;
  :active {
    background-color: #204eab;
  }
`;
