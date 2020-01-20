import React from "react";
import styled from "styled-components";
import TextArea from "./TextArea";
import Row from "./Row";
import Column from "./Column";

function App() {
  return (
    <Main>
      <Row>
        <Column>
          <TextArea title="Public Key" />
          <TextArea title="Message" />
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
