import React from "react";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Info from "./Info";
import { Container, SubContainer, SectionOne, ColumnOne1, ColumnTwo1 } from '../styled/styledGlobal';

function MainContent() {
  return (
    <Container>
      <Navbar />
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
              <Info />
            </ColumnOne1>
          <ColumnTwo1>
            <Projects />
          </ColumnTwo1>
        </SectionOne>
      </SubContainer>
    </Container>
  );
}


export default MainContent;
