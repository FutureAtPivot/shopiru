import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";

const CheckoutItem = ({
  id,
  name,
  price,
  image,
  handleRemoveFromCart,
}: {
  id: number;
  name: string;
  price: number;
  image: any
  handleRemoveFromCart: () => void;
}) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      key={id}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {/* Product Image */}
        <View
          style={{
            width: 64,
            height: 64,
            borderRadius: 50,
            overflow: "hidden",
            backgroundColor: "#32323280",
            borderWidth: 1,
            borderColor: "orange",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%" }}
            resizeMode="cover"
            source={{ uri: image}}
          />
        </View>

        {/* name & price */}
        <View style={{ alignItems: "flex-start", gap: 6, marginLeft: 12 }}>
          <Text
            style={{
              color: Colors.dark.white,
              fontSize: 16,
              fontWeight: "500",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Text>

          <Text
            style={{
              color: Colors.dark.white,
              fontSize: 18,
              fontWeight: "300",
              textTransform: "capitalize",
            }}
          >
            ${price}
          </Text>
        </View>
      </View>

      {/* Product Details */}
      <TouchableOpacity activeOpacity={0.7} onPress={handleRemoveFromCart}>
        <Text
          style={{
            fontSize: 18,
            color: "orangered",
            marginRight: 8,
            textDecorationLine: "underline",
            textDecorationStyle: "solid",
          }}
        >
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CheckoutItem;
