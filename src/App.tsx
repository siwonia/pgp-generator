import React from "react";
import styled from "styled-components";
import EncodeView from "./EncodeView";

function App() {
  return (
    <Main>
      <EncodeView />
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  min-height: 100vh;
`;
