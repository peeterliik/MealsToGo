import React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 16px;
  background-color: white;
`;

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1280px-Barbieri_-_ViaSophia25668.jpg",
    ],
    address = "100 Some lambi aadress",
    isOpenNow = true,
    rating = 4,
    isClosedTemp,
  } = restaurant;
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
      ></RestaurantCardCover>
      <Card.Title title={name}></Card.Title>
    </RestaurantCard>
  );
};
