import styled from "styled-components";
import React, { useState } from "react";
import Content from "./components/Content";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import pseudoCodeJson from "./pseudoCodeJson.jsx";

function App() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const StyledDiv = styled.div`
    width: 100%;
  `;
  return (
    <StyledDiv>
      <Navbar searchedTerm={searchedTerm} setSearchedTerm={setSearchedTerm} />
      <div className="container">
        <Sidebar data={pseudoCodeJson} />
        {pseudoCodeJson.map((data, idx) => {
          return <Content key={idx} data={data} />;
        })}
      </div>
    </StyledDiv>
  );
}

export default App;
