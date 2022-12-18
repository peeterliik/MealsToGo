import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";

import {
  Icon,
  Info,
  Address,
  Rating,
  RestaurantCardCover,
  SectionEnd,
  RestaurantCard,
} from "./restaurant-info.component.styles";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Barbieri_-_ViaSophia25668.jpg/1280px-Barbieri_-_ViaSophia25668.jpg",
    ],
    address = "100 Some lambi aadress",
    isOpenNow = true,
    rating = 4,
    isClosedTemp = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        key={name}
        source={{ uri: photos[0] }}
      ></RestaurantCardCover>
      <Info>
        <Text variant="label">{name}</Text>
        <Rating>
          {ratingArray.map(() => (
            <SvgXml xml={star} width={20} height={20} />
          ))}
          <SectionEnd>
            {isClosedTemp && <Text variant="error">CLOSED TEMPORARILY</Text>}
            <Spacer position="left" size="medium">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="medium">
              <Icon style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Rating>

        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
