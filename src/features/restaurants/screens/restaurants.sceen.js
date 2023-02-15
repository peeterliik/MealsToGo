import React, { useState, useContext } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";

import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";

import { RestaurantsContext } from "../../../services/restaurants/mock/restaurants.context";

const DroidSafeArea = styled.SafeAreaView`
  flex: 1;
`;

const SearchArea = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

const RestaurantInfoArea = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
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
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <RestaurantInfoArea>
                <RestaurantInfo restaurant={item} />
              </RestaurantInfoArea>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </DroidSafeArea>
    </>
  );
};
