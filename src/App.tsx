import React from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import Row from "./Row";
import Column from "./Column";
import Button from "./Button";

function App() {
  return (
    <Main>
      <Row>
        <Column>
          <TextArea title="Public Key" />
          <TextArea title="Message" />
          <Button title="Encode" />
        </Column>
        <Column>
          <TextArea title="Encoded Message" />
        </Column>
      </Row>
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  min-height: 100vh;
`;
