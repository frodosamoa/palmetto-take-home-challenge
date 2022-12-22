import { Umbrella } from "lucide-react";
import styled from "styled-components";

import WeatherItem from "./WeatherItem";

type RainfallProps = {
  rain: number;
  rainLabel: string;
};

const Value = styled.div`
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSizes[4]};
`;

const Label = styled.p`
  line-height: 1;
  font-size: ${({ theme }) => theme.fontSizes[7]};
`;

const Rainfall = ({ rain, rainLabel }: RainfallProps) => (
  <WeatherItem Icon={Umbrella} title="Rainfall" $animationDelay={400}>
    <Value>
      {rain}
      {rainLabel}
    </Value>
    <Label>in the last hour</Label>
  </WeatherItem>
);

export default Rainfall;
