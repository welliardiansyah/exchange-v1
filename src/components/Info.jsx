import React from "react";
import { InfoCard, Card, CardContent, Row, Digit, InfoContainer, InfoTitle, InfoSubTitle } from "../styled/styledGlobal";
import { RiExchangeLine, RiMoneyDollarCircleLine, RiWaterFlashLine } from "react-icons/ri";

function Info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit><RiExchangeLine /></Digit>
            <InfoContainer>
              <InfoTitle>Swap</InfoTitle>
              <InfoSubTitle>Trade with the lowest fees</InfoSubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Row>
            <Digit><RiWaterFlashLine /></Digit>
            <InfoContainer>
              <InfoTitle>Liquidity</InfoTitle>
              <InfoSubTitle>Start earning from fees</InfoSubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Row>
            <Digit><RiMoneyDollarCircleLine /></Digit>
            <InfoContainer>
              <InfoTitle>Transcation</InfoTitle>
              <InfoSubTitle>The lowest transcation fees</InfoSubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}

export default Info;
