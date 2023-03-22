import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { LocationContext } from "../../../services/location/location.context";

const SearchArea = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
`;

export const Search = ({ isFavoritesToggled, onFavoritesToggle }) => {
  const onChangeSearch = (query) => setSearchQuery(query);

  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword]);

  return (
    <SearchArea>
      <Searchbar
        icon={isFavoritesToggled ? "heart" : "heart-outline"}
        onIconPress={onFavoritesToggle}
        placeholder="Search for a location"
        onChangeText={onChangeSearch}
        value={searchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
      />
    </SearchArea>
  );
};
