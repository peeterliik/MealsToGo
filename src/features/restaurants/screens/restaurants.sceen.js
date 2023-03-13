import React, { useState, useContext } from "react";
import { Search } from "../components/search.component";

import { FlatList, TouchableOpacity } from "react-native";
import { colors } from "../../../infra/theme/colors";

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

const LoadingScreen = styled.ActivityIndicator`
  flex: 1;
`;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <>
      <DroidSafeArea>
        <Search />
        {isLoading ? (
          <LoadingScreen animating={true} color={colors.ui.error} size={50} />
        ) : (
          <FlatList
            data={restaurants}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("RestaurantDetail", {
                      restaurant: item,
                    })
                  }
                >
                  <RestaurantInfoArea>
                    <RestaurantInfo restaurant={item} />
                  </RestaurantInfoArea>
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.name}
          />
        )}
      </DroidSafeArea>
    </>
  );
};
