import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";

const DroidSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const SearchArea = styled.View`
  padding: 16px;
  background-color: #cbc9c9;
`;

const RestaurantInfoArea = styled.View`
  flex: 1;
  padding: 16px;
  background-color: white;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <DroidSafeArea>
        <SearchArea>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </SearchArea>
        <RestaurantInfoArea>
          <RestaurantInfo />
        </RestaurantInfoArea>
      </DroidSafeArea>
    </>
  );
};
