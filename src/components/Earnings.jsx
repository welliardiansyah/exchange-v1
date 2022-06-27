import React from "react";
import styled from "styled-components";
import { IoStatsChart } from "react-icons/io5";
import { themeColor, hoverEffect } from "../utils";

function Earnings() {
  return (
    <EarningsCard>
      <CardContent>
        <Chart>
          <IoStatsChart />
        </Chart>
        <EarningsText>Earnings</EarningsText>
        <Earning>$7,890</Earning>
        <EarningsIncrease>+ 10% since last month</EarningsIncrease>
      </CardContent>
    </EarningsCard>
  );
}

export default Earnings;
