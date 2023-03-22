import React, { useState } from "react";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

const DroidSafeArea = styled.SafeAreaView`
  flex: 1;
`;

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [expanded, setExpanded] = useState(true);
  const handlePress = () => setExpanded(!expanded);

  return (
    <DroidSafeArea>
      <RestaurantInfo restaurant={restaurant} />
      <ScrollView>
        <List.Section title="Menu">
          <List.Accordion
            title="Breakfast"
            left={(props) => <List.Icon {...props} icon="bread-slice" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Lunch"
            left={(props) => <List.Icon {...props} icon="food-fork-drink" />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Dinner"
            left={(props) => <List.Icon {...props} icon="food-turkey" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
          <List.Accordion
            title="Drinks"
            left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </DroidSafeArea>
  );
};
