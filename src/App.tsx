import React, { useState } from "react";
import styled, { css } from "styled-components";
import EncryptView from "./EncryptView";
import DecryptView from "./DecryptView";
import GenerateView from "./GenerateView";

interface Page {
  name: string;
  view: JSX.Element;
}

const pages: Page[] = [
  {
    name: "Encrypt",
    view: <EncryptView />
  },
  {
    name: "Decrypt",
    view: <DecryptView />
  },
  {
    name: "Generate",
    view: <GenerateView />
  }
];

function App() {
  const [selectedPage, setSelectedPage] = useState(pages[0]);

  function renderHeaderButtons() {
    return pages.map((page, index) => {
      return (
        <HeaderButton
          key={index}
          onClick={() => setSelectedPage(page)}
          isSelected={page === selectedPage}
        >
          {page.name}
        </HeaderButton>
      );
    });
  }

  return (
    <Main>
      <Header>{renderHeaderButtons()}</Header>
      {selectedPage.view}
    </Main>
  );
}

export default App;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px;
  margin-bottom: 0;
`;

const HeaderButton = styled.a<{ isSelected: boolean }>`
  display: flex;
  cursor: pointer;
  padding: 5px;
  ${props =>
    props.isSelected &&
    css`
      background-color: #2b5ec5;
    `}
  color: #fff;
  padding: 10px 20px;
  font-size: 14px;
  border-top: 1px solid #2b5ec5;
  border-bottom: 1px solid #2b5ec5;
  border-left: 1px solid #2b5ec5;
  :first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 1px solid #2b5ec5;
  }
`;
