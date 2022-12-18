import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { FlatList } from "react-native";

import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";

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
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
            { name: 8 },
            { name: 9 },
            { name: 10 },
          ]}
          renderItem={() => (
            <RestaurantInfoArea>
              <RestaurantInfo />
            </RestaurantInfoArea>
          )}
          keyExtractor={(item) => item.name}
        />
      </DroidSafeArea>
    </>
  );
};
