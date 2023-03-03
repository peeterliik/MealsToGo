import React from "react";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";

const DroidSafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <DroidSafeArea>
      <RestaurantInfo restaurant={restaurant} />
    </DroidSafeArea>
  );
};
