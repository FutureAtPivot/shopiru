import { View, Text } from "react-native";
import React from "react";

const ProductColor = () => {
  return (
    <View
      style={{
        gap: 5,
        display: "flex",
        alignSelf: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 50,
          backgroundColor: "hotpink",
        }}
      />
      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 50,
          backgroundColor: "green",
        }}
      />

      <View
        style={{
          width: 6,
          height: 6,
          borderRadius: 50,
          backgroundColor: "skyblue",
        }}
      />
    </View>
  );
};

export default ProductColor;
