import React from "react";
import styled from "styled-components";
import EncryptView from "./EncryptView";
import DecryptView from "./DecryptView"

function App() {
  return (
    <Main>
      <DecryptView />
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  min-height: 100vh;
`;
