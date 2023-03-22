import React from "react";
import { CompactRestaurant } from "../../../components/restuaurants/compact-restaurant.component";

export const MapCallout = ({ restaurant }) => (
  <>
    <CompactRestaurant isMap restaurant={restaurant}></CompactRestaurant>
  </>
);
